import { Request, Response } from 'express';

import { ImportCategoryUC } from './ImportCategoryUC';

class ImportCategoryController {
  constructor(private importCategoryUC: ImportCategoryUC) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUC.execute(file);

    return response.status(201).json({});
  }
}

export { ImportCategoryController };
