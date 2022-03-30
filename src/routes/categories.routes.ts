import { Router, Request, Response } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const category = createCategoryService.execute({ name, description });

  return response.status(200).json({ category });
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json({ categories });
});

export { categoriesRoutes };
