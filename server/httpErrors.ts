export type ApiErrorBody = {
  ok: false;
  error: { code: string; message: string; details?: unknown };
};

export type ApiOk<T> = { ok: true; data: T };

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'HttpError';
  }

  toBody(): ApiErrorBody {
    return {
      ok: false,
      error: {
        code: this.code,
        message: this.message,
        ...(this.details !== undefined ? { details: this.details } : {}),
      },
    };
  }
}

export function isHttpError(e: unknown): e is HttpError {
  return e instanceof HttpError;
}
