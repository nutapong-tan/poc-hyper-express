import { MiddlewareNext, Request, Response } from 'hyper-express';

export const loggerMiddleware = (req: Request, res: Response, next: MiddlewareNext) => {
	console.log(`${req.method} ${req.path}`);
	res.on('finish', () => {
		console.log(`Response: ${res.statusCode}`);
	});
	next();
};
