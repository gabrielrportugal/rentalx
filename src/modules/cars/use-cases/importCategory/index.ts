import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUC } from './ImportCategoryUC';

const importCategoryUC = new ImportCategoryUC();

const importCategoryController = new ImportCategoryController(importCategoryUC);

export { importCategoryController };
