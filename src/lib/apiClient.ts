import { catalogSchema, type CatalogPayload } from '../../shared/apiSchemas';

type ApiSuccess<T> = { ok: true; data: T };
type ApiFailure = { ok: false; error: { code: string; message: string; details?: unknown } };

async function parseJson(res: Response): Promise<unknown> {
  const text = await res.text();
  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new Error(`无效 JSON 响应 (${res.status})`);
  }
}

export async function fetchCatalog(init?: RequestInit): Promise<CatalogPayload> {
  const res = await fetch('/api/catalog', {
    ...init,
    headers: { Accept: 'application/json', ...init?.headers },
  });
  const body = (await parseJson(res)) as ApiSuccess<CatalogPayload> | ApiFailure;
  if (!body || typeof body !== 'object' || !('ok' in body)) {
    throw new Error('未知响应结构');
  }
  if (!body.ok) {
    throw new Error(body.error?.message ?? '目录加载失败');
  }
  return catalogSchema.parse(body.data);
}
