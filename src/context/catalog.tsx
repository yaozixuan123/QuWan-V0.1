import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CatalogPayload } from '../../shared/apiSchemas';
import { fetchCatalog } from '../lib/apiClient';

type Status = 'idle' | 'loading' | 'ready' | 'error';

type CatalogContextValue = {
  status: Status;
  data: CatalogPayload | null;
  error: string | null;
  refetch: () => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>('idle');
  const [data, setData] = useState<CatalogPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const refetch = useCallback(() => {
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    let cancelled = false;
    setStatus('loading');
    setError(null);
    void fetchCatalog({ signal: ac.signal })
      .then((payload) => {
        if (cancelled) return;
        setData(payload);
        setStatus('ready');
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : '加载失败');
        setStatus('error');
      });
    return () => {
      cancelled = true;
      ac.abort();
    };
  }, [tick]);

  const value = useMemo(
    () => ({ status, data, error, refetch }),
    [status, data, error, refetch],
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalogContext(): CatalogContextValue {
  const ctx = useContext(CatalogContext);
  if (!ctx) {
    throw new Error('useCatalogContext 必须在 CatalogProvider 内使用');
  }
  return ctx;
}
