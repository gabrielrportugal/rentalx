import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/use-cases/createSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationsRoutes = Router();

specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
