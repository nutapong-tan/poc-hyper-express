interface FirestoreDocument {
    id: string;
    data: Record<string, any>;
}

class FireStone {
    private db: Record<string, FirestoreDocument[]> = {};

    collection(name: string) {
        if (!this.db[name]) this.db[name] = [];
        return this.db[name];
    }


    updateDocument(collection: string, docId: string, data: Record<string, any>) {
        const docs = this.collection(collection);
        const index = docs.findIndex(doc => doc.id === docId);

        if (index !== -1) {
            docs[index].data = data;
        } else {
            this.db[collection].push({ id: docId, data });
        }
    }

    getDocuments(collection: string): FirestoreDocument[] {
        return this.db[collection];
    }
    
    deleteDocument(collection: string, docId: string) {
        const docs = (this.collection(collection) ?? []);
        const index = docs.findIndex(doc => doc.id === docId);

        if (index !== -1) {
            this.db[collection] = docs.filter(doc => doc.id !== docId);
            return true;
        }

        return false;
    }

}

export const mockFirestore = new FireStone();
