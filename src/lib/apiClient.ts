import type { CatalogPayload } from '../../shared/apiSchemas';

interface FetchOptions {
  signal?: AbortSignal;
}

interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export async function fetchCatalog({ signal }: FetchOptions = {}): Promise<CatalogPayload> {
  const res = await fetch('/api/catalog', { signal });

  if (!res.ok) {
    throw new Error(`API 请求失败: ${res.status} ${res.statusText}`);
  }

  const json: ApiResponse<CatalogPayload> = await res.json();

  if (!json.ok || !json.data) {
    const msg = json.error?.message ?? '未知响应结构（请确认已运行 npm run dev:api）';
    throw new Error(msg);
  }

  return json.data;
}
