import { z } from 'zod';

/** 与前端 `CaseStudy` 对齐的 API 载荷 */
export const caseStudySchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(500),
  technique: z.string().min(1).max(200),
  duration: z.string().min(1).max(100),
  beforeImage: z.string().url(),
  afterImage: z.string().url(),
});

/** 与前端 `Restorer` 对齐 */
export const restorerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(200),
  id_title: z.string().min(1).max(300),
  portrait: z.string().url(),
  rating: z.number().min(0).max(5),
  repairs: z.string().regex(/^[0-9]+$/),
});

/** 与前端 `Scheme` 对齐 */
export const schemeSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(300),
  type: z.string().min(1).max(200),
  philosophy: z.string().min(1).max(2000),
  duration: z.string().min(1).max(50),
  price: z.string().min(1).max(100),
  image: z.string().url(),
});

export const catalogSchema = z.object({
  caseStudies: z.array(caseStudySchema),
  restorers: z.array(restorerSchema),
  schemes: z.array(schemeSchema),
});

export type CatalogPayload = z.infer<typeof catalogSchema>;

export const repairRequestCreateSchema = z.object({
  itemCategory: z.string().max(120).optional(),
  damageNotes: z.string().min(1).max(2000),
  contact: z.string().min(5).max(200),
});

export type RepairRequestCreate = z.infer<typeof repairRequestCreateSchema>;

const httpUrl = z.string().url();

export const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
  PORT: z.coerce.number().int().min(1).max(65535).default(8787),
  SUPABASE_URL: httpUrl.optional(),
  /** 服务端绕过 RLS，用于 BFF 写入等（勿暴露给浏览器） */
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(40).optional(),
  /** 新版 Dashboard 的 publishable key（`sb_publishable_…`），与旧 anon JWT 二选一即可读公开表 */
  SUPABASE_PUBLISHABLE_KEY: z.string().min(20).optional(),
  /** 旧版 anon JWT（`eyJ…`），与 publishable 二选一 */
  SUPABASE_ANON_KEY: z.string().min(20).optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;
