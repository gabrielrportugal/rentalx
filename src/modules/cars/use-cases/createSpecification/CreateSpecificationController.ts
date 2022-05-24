import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationUC } from './CreateSpecificationUC';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificationUC = container.resolve(CreateSpecificationUC);

    const specification = await createSpecificationUC.execute({
      name,
      description,
    });

    return response.status(200).json({ specification });
  }
}

export { CreateSpecificationController };
