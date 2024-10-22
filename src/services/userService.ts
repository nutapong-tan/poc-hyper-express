import { User } from '../models/user';
import { mockFirestore } from './fireStone';


export class UserService {
    private readonly collection = 'users';

    createUser(user: User) {
        mockFirestore.updateDocument(this.collection, user.id, user);
    }

    updateUser(id: string, user: User) {
        mockFirestore.updateDocument(this.collection, id, user);
    }

    deleteUser(id: string): boolean {
        return mockFirestore.deleteDocument(this.collection, id);  
    }

    getAllUsers(): User[] {
        return (mockFirestore.getDocuments(this.collection) ?? []).map(doc => doc.data as User);
    }
}
