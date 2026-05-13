import type { SupabaseClient } from '@supabase/supabase-js';
import type { ServerEnv } from '../shared/apiSchemas';
import { loadServerEnv } from './env';
import { createSupabaseForServer, type ServerSupabaseMode } from './supabase';

export type ApiContext = {
  env: ServerEnv;
  supabase: SupabaseClient | null;
  supabaseMode: ServerSupabaseMode;
  canInsertRepairRequests: boolean;
};

let cached: ApiContext | null = null;

/** 本地 Express 与 Vercel Serverless 共用；同实例内单例缓存 */
export function getApiContext(): ApiContext {
  if (!cached) {
    const env = loadServerEnv();
    const { client, mode, canInsertRepairRequests } = createSupabaseForServer(env);
    cached = { env, supabase: client, supabaseMode: mode, canInsertRepairRequests };
  }
  return cached;
}
