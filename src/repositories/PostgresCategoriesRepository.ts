import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log('name', name);
    throw new Error('Method not implemented.');
  }
  create(category: ICreateCategoryDTO): Category {
    console.log('category', category);
    throw new Error('Method not implemented.');
  }
  list(): Category[] {
    throw new Error('Method not implemented.');
  }
}

export { PostgresCategoriesRepository };
