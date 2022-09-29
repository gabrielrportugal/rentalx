import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUC } from './CreateUserUC';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, password, driver_license, email } = request.body;

    const createUserUC = container.resolve(CreateUserUC);

    const user = await createUserUC.execute({
      name,
      password,
      driver_license,
      email,
    });

    return response.status(200).json({ user });
  }
}

export { CreateUserController };
