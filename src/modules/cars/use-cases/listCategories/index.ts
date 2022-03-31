import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUC } from './ListCategoriesUC';

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUC = new ListCategoriesUC(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUC);

export { listCategoriesController };
