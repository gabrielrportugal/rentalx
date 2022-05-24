import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUC } from './ListCategoriesUC';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUC = container.resolve(ListCategoriesUC);

    const categories = await listCategoriesUC.execute();

    return response.status(200).json({ categories });
  }
}

export { ListCategoriesController };
