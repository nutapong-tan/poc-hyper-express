import { Request, Response } from 'hyper-express';
import { UserService } from '../services/userService';
import { errorHandler } from '../middlewares/error-handler';

const userService = new UserService();

export class UserController {
	static readonly createUser = errorHandler(async (req: Request, res: Response) => {

		const { id, name, email } = await req.json();
		userService.createUser({ id, name, email });

		return res.status(201).json({ message: 'User created successfully', result: true });
	});

	static readonly updateUser = errorHandler(async (req: Request, res: Response) => {
		const { id } = req.params;
		const { name, email } = await req.json();
		userService.updateUser(id, { id, name, email });

		return res.status(200).json({ message: 'User updated successfully', result: true });
	});

	static readonly getInfo = errorHandler(async (_req: Request, res: Response) => {
		const users = userService.getAllUsers();

		return res.status(200).json({ results: users ?? [] });
	});

	static readonly deleteUser = errorHandler(async (req: Request, res: Response) => {
		const { id } = req.params;
		const hasDelete = userService.deleteUser(id);

		if (!hasDelete) {
			return res.status(404).json({ message: 'User not found', result: false });
		}
		return res.status(200).json({ message: 'User deleted successfully', result: true });
	});
}
