import { Request, Response, MiddlewareNext } from 'hyper-express';

export const errorHandler = (handler: Function) => {
    return async (req: Request, res: Response, next: MiddlewareNext) => {
        try {
            await handler(req, res);
            next();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    };
};