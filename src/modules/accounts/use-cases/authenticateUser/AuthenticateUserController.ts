import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUC } from './AuthenticateUserUC';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUC = container.resolve(AuthenticateUserUC);

    const authenticateInfo = await authenticateUserUC.execute({
      email,
      password,
    });

    return response.json(authenticateInfo);
  }
}

export { AuthenticateUserController };
