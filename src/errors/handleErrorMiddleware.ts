import { Request, Response } from 'express';

import { AppError } from './AppError';

export async function handleError(
  err: Error,
  request: Request,
  response: Response
) {
  if (err instanceof AppError) {
    return response.status(err.status_code).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
}
