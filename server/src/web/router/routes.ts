import { Router } from 'express';
import * as userController from '../controller/UserController';

const routes = Router();

routes.post('/api/register', userController.register);
routes.post('/api/login', userController.login);

export default routes;
