import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getApiContext } from '../server/apiContext';
import { repairRequestCreateSchema } from '../shared/apiSchemas';
import { HttpError } from '../server/httpErrors';
import { sendRouteError } from '../server/errorResponse';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ ok: false, error: { code: 'METHOD_NOT_ALLOWED', message: '仅支持 POST' } });
      return;
    }
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
  } catch (err) {
    sendRouteError(res, err);
  }
}
