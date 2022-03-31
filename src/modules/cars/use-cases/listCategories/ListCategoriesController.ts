import { Request, Response } from 'express';

import { ListCategoriesUC } from './ListCategoriesUC';

class ListCategoriesController {
  constructor(private listCategoriesUC: ListCategoriesUC) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUC.execute();

    return response.status(200).json({ categories });
  }
}

export { ListCategoriesController };
