import type { SupabaseClient } from '@supabase/supabase-js';
import {
  caseStudySchema,
  restorerSchema,
  schemeSchema,
  catalogSchema,
  type CatalogPayload,
} from '../shared/apiSchemas';
import { getSeedCatalog } from './seedCatalog';

type CaseRow = {
  id: string;
  title: string;
  technique: string;
  duration: string;
  before_image: string;
  after_image: string;
};

type RestorerRow = {
  id: string;
  name: string;
  id_title: string;
  portrait: string;
  rating: number;
  repairs: string;
};

type SchemeRow = {
  id: string;
  name: string;
  type: string;
  philosophy: string;
  duration: string;
  price: string;
  image: string;
};

function mapCase(r: CaseRow) {
  return caseStudySchema.parse({
    id: r.id,
    title: r.title,
    technique: r.technique,
    duration: r.duration,
    beforeImage: r.before_image,
    afterImage: r.after_image,
  });
}

function mapRestorer(r: RestorerRow) {
  return restorerSchema.parse({
    id: r.id,
    name: r.name,
    id_title: r.id_title,
    portrait: r.portrait,
    rating: typeof r.rating === 'string' ? Number(r.rating) : r.rating,
    repairs: r.repairs,
  });
}

function mapScheme(r: SchemeRow) {
  return schemeSchema.parse({
    id: r.id,
    name: r.name,
    type: r.type,
    philosophy: r.philosophy,
    duration: r.duration,
    price: r.price,
    image: r.image,
  });
}

export async function fetchCatalogFromDb(client: SupabaseClient): Promise<CatalogPayload> {
  const [casesRes, restorersRes, schemesRes] = await Promise.all([
    client.from('case_studies').select('*').order('sort_order', { ascending: true }),
    client.from('restorers').select('*').order('sort_order', { ascending: true }),
    client.from('schemes').select('*').order('sort_order', { ascending: true }),
  ]);

  const err = casesRes.error ?? restorersRes.error ?? schemesRes.error;
  if (err) throw err;

  const payload: CatalogPayload = {
    caseStudies: (casesRes.data as CaseRow[]).map(mapCase),
    restorers: (restorersRes.data as RestorerRow[]).map(mapRestorer),
    schemes: (schemesRes.data as SchemeRow[]).map(mapScheme),
  };

  return catalogSchema.parse(payload);
}

export async function getCatalog(client: SupabaseClient | null): Promise<{
  data: CatalogPayload;
  source: 'supabase' | 'fallback';
}> {
  if (!client) {
    return { data: getSeedCatalog(), source: 'fallback' };
  }
  try {
    const data = await fetchCatalogFromDb(client);
    return { data, source: 'supabase' };
  } catch (e) {
    console.warn('[catalog] Supabase 读取失败，使用本地种子', e);
    return { data: getSeedCatalog(), source: 'fallback' };
  }
}
