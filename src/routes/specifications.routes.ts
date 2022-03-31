import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/use-cases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) =>
  createSpecificationController.handle(request, response)
);

export { specificationsRoutes };
