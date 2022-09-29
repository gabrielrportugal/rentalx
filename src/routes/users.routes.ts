import { CreateUserController } from '@accounts/use-cases/createUser/CreateUserController';
import { Router } from 'express';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
