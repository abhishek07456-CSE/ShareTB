import { ObjectId } from 'mongoose';
import { Authenticator } from '../Middleware/Authenticator';
import DocumentRepository from '../Repository/Document.repository';
import { IDocument } from '../Interface/IDocument.model';
export default class DocumentModel {
    docRepo: DocumentRepository;
    constructor(){
        this.docRepo = new DocumentRepository();
    }
    //file folder
    createDocument(data:any){
        return this.docRepo.create(data).then((data) => {
            return <IDocument> data;
        }).catch((err) => {
            throw err;
        });
    }
    public updateByDocId = (doc_id : ObjectId, data: any) => {
        return this.docRepo.update(doc_id, data).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }
}