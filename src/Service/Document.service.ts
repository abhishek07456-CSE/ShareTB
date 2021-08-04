import DocumentModel from "../Models/Document.model";
import uploadFile from "../providers/multer";
import { IDocument } from "../Interface/IDocument.model";
export default class DocumentService {
    public static async createDocument(data: any) {
        const document = new DocumentModel();
        //to-do check folder id correct or not , check permission to add
        // if(data.parent){
        //     const permissions = document.isAccessible(data.parent);
        //     if(!permissions) return;
        // }
        const curr_doc : IDocument = await document.createDocument(data);
        if (curr_doc && curr_doc.parent) {
            await document.addDocumentChildId(curr_doc.parent , [curr_doc._id]);
        }
        return curr_doc;
    }

}