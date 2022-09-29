import { Repository, getRepository } from 'typeorm';

import { Specification } from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    return this.repository.findOne({ name });
  }
}

export { SpecificationRepository };
