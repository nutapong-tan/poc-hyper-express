"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const fireStone_1 = require("./fireStone");
class UserService {
    constructor() {
        this.collection = 'users';
    }
    createUser(user) {
        fireStone_1.mockFirestore.updateDocument(this.collection, user.id, user);
    }
    updateUser(id, user) {
        fireStone_1.mockFirestore.updateDocument(this.collection, id, user);
    }
    deleteUser(id) {
        return fireStone_1.mockFirestore.deleteDocument(this.collection, id);
    }
    getAllUsers() {
        return (fireStone_1.mockFirestore.getDocuments(this.collection) ?? []).map(doc => doc.data);
    }
}
exports.UserService = UserService;
