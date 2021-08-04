import { Authenticator } from './../Middleware/Authenticator';
import { ObjectId } from 'mongoose';
import DocumentRepository from '../Repository/Document.repository';
import { IDocument } from '../Interface/IDocument.model';
export default class DocumentModel {
    docRepo: DocumentRepository;
    constructor() {
        this.docRepo = new DocumentRepository();
    }
    //file folder
    public createDocument(data: IDocument) {
        return this.docRepo.create(data).then((data) => {
            return <IDocument>data;
        }).catch((err) => {
            throw err;
        });
    }
    public updateByDocId = (doc_id: ObjectId, data: any) => {
        return this.docRepo.update(doc_id, data).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }

    public addDocumentChildId = async (parent_id: ObjectId, children_id: ObjectId[]) => {
        if (!Array.isArray(children_id)) {
            children_id = [children_id];
        }
        /*
        to-do
        const document:IDocument = this.docRepo.docSchema;
        document.children = children_id;
        so no dependency of children key
        */
        return await this.updateByDocId(parent_id, { $addToSet: { "children": children_id } });
    }

    public getDocumentById = (id: ObjectId) => {
        return this.docRepo.findById(id).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }

    public isAccessible = (id: ObjectId) => {
        const doc = this.docRepo.docSchema;
        doc.createdBy = Authenticator.id;
        doc._id = id;
        return this.docRepo.findOne(doc).then((data) => {
            return false;
        }).catch((err) => {
            return false;
        });
    }
}