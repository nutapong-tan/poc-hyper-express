import { Router } from 'hyper-express';
import { UserController } from '../controllers/userController';

const infoRouter = new Router();

infoRouter.get('/info', UserController.getInfo);

export default infoRouter;
