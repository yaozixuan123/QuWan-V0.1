# 部署到 GitHub 与 Vercel

本项目为 **Vite 前端 + Vercel Serverless API**（`api/` 目录）。生产环境由 Vercel 托管静态资源与 `/api/*`；本地仍可用 `npm run dev:full`（Vite 代理 + Express）。

## 1. 安装与构建自检

```bash
npm install
npm run build
npm run lint
```

## 2. 推送到 GitHub

在仓库根目录（本目录）执行：

```bash
git init
git add -A
git commit -m "Initial commit: 修玩 + Supabase + Vercel API"
```

在 GitHub 新建空仓库（不要勾选自动添加 README，避免首次推送冲突），然后：

```bash
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

若使用 SSH，将 `origin` URL 换成 `git@github.com:<用户名>/<仓库>.git`。

**注意：** `.env.local` 已在 `.gitignore` 中，不会被提交；密钥只在 Vercel 控制台配置。

## 3. 连接 Vercel

1. 打开 [vercel.com](https://vercel.com)，用 GitHub 登录。
2. **Add New Project** → Import 刚推送的仓库。
3. Vercel 会读取根目录的 `vercel.json`（构建命令 `npm run build`，输出目录 `dist`）。
4. 在 **Settings → Environment Variables** 为 **Production**（及需要时的 Preview）添加：

   | 变量名 | 说明 |
   |--------|------|
   | `SUPABASE_URL` | 项目 URL，如 `https://xxx.supabase.co` |
   | `SUPABASE_PUBLISHABLE_KEY` 或 `SUPABASE_ANON_KEY` | 公开读目录 |
   | `SUPABASE_SERVICE_ROLE_KEY` | 可选；仅服务端，用于 `POST /api/repair-requests` 写入 |

5. 保存后 **Redeploy** 一次，使环境变量生效。

## 4. 本地模拟 Vercel（可选）

```bash
npx vercel dev
```

会同时起前端与 Serverless API，便于验证与线上一致的路由。

## 5. 常见问题

- **页面空白但控制台 404 on `/assets/...`**：确认 Vercel 的 Output Directory 为 `dist`，且 `npm run build` 成功。
- **接口 404**：确认仓库根目录存在 `api/catalog.ts`、`api/health.ts` 等，且未改 `vercel.json` 中的 `rewrites` 误伤 `/api`。
- **目录仍是本地种子**：检查 Vercel 环境变量是否已配置 `SUPABASE_URL` 与 publishable/anon；查看响应头 `X-Catalog-Source` 为 `supabase` 还是 `fallback`。
