import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { ServerEnv } from '../shared/apiSchemas';

const clientOptions = {
  auth: { persistSession: false, autoRefreshToken: false },
} as const;

export type ServerSupabaseMode = 'off' | 'service' | 'public';

export function createSupabaseForServer(env: ServerEnv): {
  client: SupabaseClient | null;
  mode: ServerSupabaseMode;
  /** 当前 RLS 下仅 service_role 可写 repair_requests */
  canInsertRepairRequests: boolean;
} {
  if (!env.SUPABASE_URL) {
    return { client: null, mode: 'off', canInsertRepairRequests: false };
  }

  if (env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      client: createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, clientOptions),
      mode: 'service',
      canInsertRepairRequests: true,
    };
  }

  const publicKey = env.SUPABASE_PUBLISHABLE_KEY ?? env.SUPABASE_ANON_KEY;
  if (publicKey) {
    return {
      client: createClient(env.SUPABASE_URL, publicKey, clientOptions),
      mode: 'public',
      canInsertRepairRequests: false,
    };
  }

  return { client: null, mode: 'off', canInsertRepairRequests: false };
}
