import { ZodError } from 'zod';
import { isHttpError } from './httpErrors';

type JsonRes = {
  status: (code: number) => { json: (body: unknown) => void };
};

export function sendRouteError(res: JsonRes, err: unknown): void {
  if (err instanceof ZodError) {
    res.status(400).json({
      ok: false,
      error: { code: 'VALIDATION_ERROR', message: '数据校验失败', details: err.flatten() },
    });
    return;
  }
  if (isHttpError(err)) {
    res.status(err.status).json(err.toBody());
    return;
  }
  console.error('[unhandled]', err);
  res.status(500).json({
    ok: false,
    error: { code: 'INTERNAL', message: '服务器内部错误' },
  });
}
