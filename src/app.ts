import HyperExpress from 'hyper-express';
import routes from './routes';
import { loggerMiddleware } from './middlewares/logger';

const app = new HyperExpress.Server();

app.use(loggerMiddleware);
app.use(routes);

app.listen(31000)
    .then(() => console.log('Server is running on http://localhost:31000'))
    .catch(err => console.error('Failed to start server', err));
