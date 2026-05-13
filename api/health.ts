import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getApiContext } from '../server/apiContext';
import { isSupabaseConfigured } from '../server/env';
import { sendRouteError } from '../server/errorResponse';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ ok: false, error: { code: 'METHOD_NOT_ALLOWED', message: '仅支持 GET' } });
      return;
    }
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
  } catch (err) {
    sendRouteError(res, err);
  }
}
