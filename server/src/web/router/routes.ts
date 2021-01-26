import { Router } from 'express';

import * as userController from '../controller/UserController';
import * as authController from '../controller/admin/AuthController';
import * as categoryController from '../controller/CategoryController';
import { validate, loginValidation, registerValidation } from '../../middleware/validator';

const routes = Router();

routes.post('/api/admin/register', registerValidation(), validate, authController.register);
routes.post('/api/admin/login', loginValidation(), validate, authController.login);

routes.post('/api/register', registerValidation(), validate, userController.register);
routes.post('/api/login', loginValidation(), validate, userController.login);

routes.post('/api/category/add', categoryController.store);

export default routes;
