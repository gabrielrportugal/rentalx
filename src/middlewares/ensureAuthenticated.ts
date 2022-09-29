import { UsersRepository } from '@accounts/repositories/implementations/UsersRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from 'src/errors/AppError';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(token, 'a57cdb55f090ce21a4e4519bebb138de');

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId as string);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
