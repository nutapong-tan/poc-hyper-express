"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockFirestore = void 0;
class FireStone {
    constructor() {
        this.db = {};
    }
    collection(name) {
        if (!this.db[name])
            this.db[name] = [];
        return this.db[name];
    }
    updateDocument(collection, docId, data) {
        const docs = this.collection(collection);
        const index = docs.findIndex(doc => doc.id === docId);
        if (index !== -1) {
            docs[index].data = data;
        }
        else {
            this.db[collection].push({ id: docId, data });
        }
    }
    getDocuments(collection) {
        return this.db[collection];
    }
    deleteDocument(collection, docId) {
        const docs = (this.collection(collection) ?? []);
        const index = docs.findIndex(doc => doc.id === docId);
        if (index !== -1) {
            this.db[collection] = docs.filter(doc => doc.id !== docId);
            return true;
        }
        return false;
    }
}
exports.mockFirestore = new FireStone();
