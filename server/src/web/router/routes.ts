import { Router } from 'express';
import * as userController from '../controller/UserController';
import * as authController from '../controller/admin/AuthController';

const routes = Router();

routes.post('/api/admin/register', authController.register);
routes.post('/api/admin/login', authController.login);

routes.post('/api/register', userController.register);
routes.post('/api/login', userController.login);

export default routes;