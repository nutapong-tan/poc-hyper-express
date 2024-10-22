import { Router } from 'hyper-express';
import userRouter from './userRoutes';
import infoRouter from './infoRoutes';

const router = new Router();

// Use the imported routers
router.use('/api', userRouter);
router.use('/api', infoRouter);

export default router;