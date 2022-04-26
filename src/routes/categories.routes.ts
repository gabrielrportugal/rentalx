import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/use-cases/createCategory';
import { importCategoryController } from '../modules/cars/use-cases/importCategory';
import { listCategoriesController } from '../modules/cars/use-cases/listCategories';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response)
);

console.log('teste');

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.handle(request, response)
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoryController.handle(request, response)
);

export { categoriesRoutes };
