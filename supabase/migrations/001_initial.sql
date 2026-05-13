-- 修玩：目录与委托表。在 Supabase SQL Editor 中执行本文件，或使用 CLI: supabase db push

create extension if not exists "pgcrypto";

-- 修复案例
create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 500),
  technique text not null check (char_length(technique) between 1 and 200),
  duration text not null check (char_length(duration) between 1 and 100),
  before_image text not null check (before_image ~ '^https?://'),
  after_image text not null check (after_image ~ '^https?://'),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- 匠人
create table if not exists public.restorers (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  id_title text not null check (char_length(id_title) between 1 and 300),
  portrait text not null check (portrait ~ '^https?://'),
  rating numeric(3,1) not null check (rating >= 0 and rating <= 5),
  repairs text not null check (repairs ~ '^[0-9]+$'),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- 修复方案
create table if not exists public.schemes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null,
  philosophy text not null check (char_length(philosophy) between 1 and 2000),
  duration text not null,
  price text not null,
  image text not null check (image ~ '^https?://'),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- 委托 / 线索（经 BFF 写入，RLS 禁止匿名直连写入）
create table if not exists public.repair_requests (
  id uuid primary key default gen_random_uuid(),
  item_category text,
  damage_notes text not null check (char_length(damage_notes) between 1 and 2000),
  contact text not null check (char_length(contact) between 5 and 200),
  created_at timestamptz not null default now()
);

alter table public.case_studies enable row level security;
alter table public.restorers enable row level security;
alter table public.schemes enable row level security;
alter table public.repair_requests enable row level security;

-- 公开只读目录（若将来前端直连 Supabase 使用 anon key）
create policy "case_studies_select_public" on public.case_studies for select using (true);
create policy "restorers_select_public" on public.restorers for select using (true);
create policy "schemes_select_public" on public.schemes for select using (true);

-- 委托表不开放 anon 读写；仅 service_role（服务端）或后续 authenticated 策略可写
create policy "repair_requests_no_anon" on public.repair_requests for select using (false);

comment on table public.repair_requests is 'BFF 使用 service_role 插入；禁止 anon 读取以降低隐私暴露';

-- 种子数据（与应用默认展示一致，可按需删改）
insert into public.case_studies (id, title, technique, duration, before_image, after_image, sort_order) values
  ('11111111-1111-1111-1111-111111111101', '宋代影青瓷盘修复', '金缮工艺', '14 天',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuAaf3VT1sE3f5_bnblXCvTEXpVcG3txCc07aNEPfbEDZMOUrz_cxu_GWZgkxTb6qzgBYXJM57X9CEDMgUG6ubEjP_443PG8SnxtDU9d9p0XQBIxFgX7BXpkFa_7NGLphYKgKggxYSvTF6TR44nxuxy0qywsXDSyqcXOvBGl8aOw9OtWJYhvza9KQ70acbWbToqZMGDiC5el_7CA6O5epzlZE0NacK1y6O2rXwLzfmjMl6jdXFmIqVmEW9vURvjs7c2FAqvpP1N8RQE',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuACwhAkxAjv32-0w9O_QvFOgKVlBXKEkHL3zeWuLXxqU-4F7H2gT8rdJDAz0FkdwF4rLYQw_IrPj4ai8XOsNxO_WrRvDEDqxxLJ48kXhlpStGfDK1CsAmXszmDkgApKutGNn6zRS-n27_TkqCEsTo1K1IE20MdmWHN__zZ5HxAWkllO_3NuD2Hep0cLBK-GGK_cxgGDT1RH82ByRVCtvDTirA_qFKX2j4F1szxhZheeHvB6Oi8xJMhOBbI3jXGP6mg0dGA_NNgOwTs', 0),
  ('11111111-1111-1111-1111-111111111102', '限定版潮玩表面翻新', '模型涂装', '5 天',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBZj-FDnwNlE37NXlMbpgo5-sNOsxcDbzHhZ5sq7dFe5j0mZEuVUq76Wb5R6r55c_Vk4LRHAI3S1nWS7xi1IATFDXfPrWct8YkJzMh194PYTD-5uLwaa0AffhYbfQLGYpvQqquAfVUvo8Y-tTacJQEXXatQ2tjgarsaOAU9opSxz3uWBFz-djp-fUoMA0IgZUt4sLZx-VviS0y0m5KjyMMCJtU3Ai45cfL1LzJSk5EKjORJKFtArEdU0B0ulhPQIOxmyxvc2YWhyfQ',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBAG95aRq07_ooWs44F8QdND5fq5yTuosSPyR13nSEV93XczTSG_Wypbv5O5ANIXk2GqlHgrAceYtzgBWNJkXx__QXTOzpmBjFfrjf3YPGcFZHEk19Y_LEbyMDCBLvK__yLxEm0pxJl3Y1w_uDZf_n1y3XhnQFf7wAcTc-T0c2gEUHTt9pMTSGHmXdL4h9gai9dl9V2qwG8pkwCy0EuP2a0n2pBrzjBqt6QCClnd-vnE7F_sw83D_I_-x1g_8iT6GDYP69mCQ5rnbE', 1)
on conflict (id) do nothing;

insert into public.restorers (id, name, id_title, portrait, rating, repairs, sort_order) values
  ('22222222-2222-2222-2222-222222222201', '林修平', '国家二级文物修复师',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuDUyLuq3McL6isiteJU2nSZqg4KlKowPr1UTgEOPeTyF9jowWwjN4V4zBQs6NFGv1AvPaFrhKfxW-WLFKnvao-aFh23SEBs__QsZMoy_pjd_MVo-K_jXVvB16zwiP8IKrhfu9FkOTxYIosdWEvYpP9HCflcf6gdwH1mHN4NGdCT1ouyN5aojoYgXEJ2K7oPbiGiqDoZpEJFaUfc1XBUgSb4yxGRG8eIumrw0KEdWPRhJ9sVIRcnxtDgTdWv642gWDmY5ntPecuC5Po', 4.9, '128', 0),
  ('22222222-2222-2222-2222-222222222202', '苏婉儿', '高级潮玩涂装专家',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuCsagk60Rcs8OXvGjTz0aH9RUK2f2gFWefjfc8fandYslPsZ9K8OEBwYLSczJKxdM5d8BKHSzFJcS831P4LmOj8tfLdUWdbmz7XJgJJrRknGpc2huRQy8AkKY6D35D71HrM-ifbvBISUQpBlZHWSBbM0pZwkaIkoqYOyRD80IEw4-WuPGEbMG-0lrvX04kcYTeOLF_9us9RI-OBKUJE6AsAZ1r80-5EaSg1Aci3VHsjuQ1n8zuK5nB15IhIb1Idr1QM1SYDpmAEbtE', 5.0, '342', 1)
on conflict (id) do nothing;

insert into public.schemes (id, name, type, philosophy, duration, price, image, sort_order) values
  ('33333333-3333-3333-3333-333333333301', '林清泉 师傅', '匠心推选',
   '遵循“修旧如旧”的原则，采用传统天然大漆工艺，最大程度保留岁月的痕迹。',
   '45', '8,200',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuBHgrQeng3QRt6_Q5dD9jr5rz6rv3BI_O0_3W6zTeDjHkX8pJUciRsMjVMnlS5t6auJy4_bK3uILLEu_LtdOLF-umqq-nJ8_vVYrkmyUx1--dC2wb0sL43iy9Wp97q2R68HhGI7MKBkLSHXBg8u8mUauzNSdC8qtN1tMWUjwFZ44bKHjjq3JhhCzVOTiPcGvawc_oz-4h3XKDS7H1oFikjEDE4JNQjlX1U-_X2wm6dHDr5CdPiAt8D1OvVUjxrzLPVTXmLs9gv11lE', 0),
  ('33333333-3333-3333-3333-333333333302', '苏博文 实验室', '科技融合',
   '利用3D扫描与纳米粘合技术。在分子层面进行结构加固，呈现出极简的现代美感。',
   '20', '12,500',
   'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ifCe6qja7jZnUQ6ma6EyPQN9QBO28ew9nibXBNSvih4Cx1h4jTvyEqFKOcUrZ4zAea3BcSb1UHIC0qqPj7m3cQFvlsPIXBWMNY1TdnlPcDi0GujHWEmS1oIKGiEL57J3GruD19KQljCBLn8t2qty3w7qHSAqeH7d0xlVA0in6eNpJS7xFTLAgOC6IJqaxKnznvLM-PY4b2UVp5RxMs2aTraqu6wKRLoOKSqQKqYScbRjQ7BUsl1QsiDA1w82H1B09dcqa8JHgI0', 1)
on conflict (id) do nothing;
