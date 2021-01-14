import { Router } from 'express';
import * as userController from '../controller/UserController';

const routes = Router();

routes.post('/api/register', userController.register);

export default routes;
