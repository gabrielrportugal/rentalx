import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUC } from './CreateCategoryUC';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUC = new CreateCategoryUC(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUC);

export { createCategoryController };
