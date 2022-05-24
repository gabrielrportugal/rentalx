import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUC } from './ImportCategoryUC';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUC = container.resolve(ImportCategoryUC);

    await importCategoryUC.execute(file);

    return response.status(201).json({});
  }
}

export { ImportCategoryController };
