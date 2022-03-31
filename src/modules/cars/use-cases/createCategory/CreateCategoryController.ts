import { Request, Response } from 'express';

import { CreateCategoryUC } from './CreateCategoryUC';

class CreateCategoryController {
  constructor(private createCategoryUC: CreateCategoryUC) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const category = this.createCategoryUC.execute({
      name,
      description,
    });

    return response.status(200).json({ category });
  }
}

export { CreateCategoryController };
