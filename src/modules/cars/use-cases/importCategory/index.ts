import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUC } from './ImportCategoryUC';

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUC = new ImportCategoryUC(categoriesRepository);

const importCategoryController = new ImportCategoryController(importCategoryUC);

export { importCategoryController };
