import { UsersRepository } from '@accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '@cars/repositories/implementations/SpecificationRepository';
import { ISpecificationsRepository } from '@cars/repositories/ISpecificationsRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
