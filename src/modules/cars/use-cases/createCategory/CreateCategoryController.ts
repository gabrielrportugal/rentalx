import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUC } from './CreateCategoryUC';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUC = container.resolve(CreateCategoryUC);

    const category = await createCategoryUC.execute({
      name,
      description,
    });

    return response.status(200).json({ category });
  }
}

export { CreateCategoryController };
