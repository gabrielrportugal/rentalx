import { AppError } from 'src/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUC {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<Specification> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    return this.specificationsRepository.create({
      description,
      name,
    });
  }
}

export { CreateSpecificationUC };
