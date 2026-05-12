import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getApiContext } from '../server/apiContext';
import { getCatalog } from '../server/catalogService';
import { sendRouteError } from '../server/errorResponse';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ ok: false, error: { code: 'METHOD_NOT_ALLOWED', message: '仅支持 GET' } });
      return;
    }
    const { supabase } = getApiContext();
    const { data, source } = await getCatalog(supabase);
    res.setHeader('X-Catalog-Source', source);
    res.json({ ok: true, data });
  } catch (err) {
    sendRouteError(res, err);
  }
}
