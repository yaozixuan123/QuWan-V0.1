import express from 'express';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import { getApiContext } from './apiContext';
import { loadServerEnv, isSupabaseConfigured } from './env';
import { getCatalog } from './catalogService';
import { repairRequestCreateSchema } from '../shared/apiSchemas';
import { HttpError } from './httpErrors';
import { sendRouteError } from './errorResponse';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: '64kb' }));

function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    void fn(req, res, next).catch(next);
  };
}

app.get(
  '/api/health',
  asyncHandler(async (_req, res) => {
    const { env, supabaseMode } = getApiContext();
    res.json({
      ok: true,
      data: {
        uptime: process.uptime(),
        supabase: !isSupabaseConfigured(env)
          ? 'missing_credentials'
          : supabaseMode === 'service'
            ? 'service'
            : 'public_read_only',
      },
    });
  }),
);

app.get(
  '/api/catalog',
  asyncHandler(async (_req, res) => {
    const { supabase } = getApiContext();
    const { data, source } = await getCatalog(supabase);
    res.setHeader('X-Catalog-Source', source);
    res.json({ ok: true, data });
  }),
);

app.post(
  '/api/repair-requests',
  asyncHandler(async (req, res) => {
    const parsed = repairRequestCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new HttpError(400, 'VALIDATION_ERROR', '请求体验证失败', parsed.error.flatten());
    }
    const { supabase, canInsertRepairRequests } = getApiContext();
    if (!supabase || !canInsertRepairRequests) {
      throw new HttpError(
        503,
        'DATABASE_UNAVAILABLE',
        '写入委托需要服务端配置 SUPABASE_SERVICE_ROLE_KEY；仅 publishable/anon 密钥无法绕过 repair_requests 的 RLS',
      );
    }
    const row = {
      item_category: parsed.data.itemCategory ?? null,
      damage_notes: parsed.data.damageNotes,
      contact: parsed.data.contact,
    };
    const { data, error } = await supabase.from('repair_requests').insert(row).select('id').single();
    if (error) {
      console.error('[repair-requests]', error);
      throw new HttpError(500, 'DATABASE_ERROR', '保存委托失败');
    }
    res.status(201).json({ ok: true, data: { id: data.id } });
  }),
);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  sendRouteError(res, err);
});

const env = loadServerEnv();
app.listen(env.PORT, () => {
  console.log(`[api] http://127.0.0.1:${env.PORT}`);
  const { canInsertRepairRequests } = getApiContext();
  if (!isSupabaseConfigured(env)) {
    console.warn('[api] 未设置 SUPABASE_URL 与任一 Supabase 密钥，目录接口将返回本地种子数据');
  } else if (!canInsertRepairRequests) {
    console.warn('[api] 当前为 publishable/anon：可从云端读取目录；POST /api/repair-requests 需配置 SUPABASE_SERVICE_ROLE_KEY');
  }
});
