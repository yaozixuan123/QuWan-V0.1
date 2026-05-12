import { config } from 'dotenv';
import { serverEnvSchema, type ServerEnv } from '../shared/apiSchemas';

config({ path: ['.env.local', '.env'] });

let cached: ServerEnv | null = null;

export function loadServerEnv(): ServerEnv {
  if (cached) return cached;
  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error('[env] 无效配置', parsed.error.flatten().fieldErrors);
    throw new Error('服务器环境变量校验失败');
  }
  cached = parsed.data;
  return cached;
}

export function isSupabaseConfigured(env: ServerEnv): boolean {
  return Boolean(
    env.SUPABASE_URL &&
      (env.SUPABASE_SERVICE_ROLE_KEY ||
        env.SUPABASE_PUBLISHABLE_KEY ||
        env.SUPABASE_ANON_KEY),
  );
}
