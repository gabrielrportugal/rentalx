import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUC } from './CreateSpecificationUC';

const specificationsRepository = SpecificationRepository.getInstance();

const createSpecificationUC = new CreateSpecificationUC(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUC
);

export { createSpecificationController };
