import { Router } from 'hyper-express';
import { UserController } from '../controllers/userController';

const userRouter = new Router();

userRouter.post('/users', UserController.createUser);
userRouter.put('/users/:id', UserController.updateUser);
userRouter.delete('/users/:id', UserController.deleteUser);

export default userRouter;
