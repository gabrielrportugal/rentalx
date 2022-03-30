import { Category } from '../model/Category';

// DTO -> Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  create(category: ICreateCategoryDTO): Category;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
