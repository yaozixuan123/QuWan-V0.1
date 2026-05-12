<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/831172ce-e7d0-491a-9e7c-f767e8f1b29f

## 部署（GitHub + Vercel）

生产环境使用 **Vercel** 托管：前端为 `vite build` 产物，接口为根目录 `api/` 下的 Serverless 函数（与本地 `server/` 共享业务逻辑）。完整步骤见 [DEPLOY.md](./DEPLOY.md)。

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
