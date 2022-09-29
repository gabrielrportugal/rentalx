import { AuthenticateUserController } from '@accounts/use-cases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/session', authenticateUserController.handle);

export { authenticateRoutes };
