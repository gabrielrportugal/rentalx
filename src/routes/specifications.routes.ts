import { Router } from 'express';
import { ensureAuthenticated } from 'src/middlewares/ensureAuthenticated';

import { CreateSpecificationController } from '../modules/cars/use-cases/createSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
