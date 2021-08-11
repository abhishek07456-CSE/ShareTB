import { getModelForClass } from "@typegoose/typegoose";
import DocumentModel from "../Models/Document.model";
import { Document } from "../Schema/Document.model";
export default class DocumentService {
    public static async createDocument(data: any) {
        const document = getModelForClass(Document);
        //to-do check folder id correct or not , check permission to add
        // if(data.parent){
        //     const permissions = document.isAccessible(data.parent);
        //     if(!permissions) return;
        // }
        let doc = await document.create(data);
        return doc;
    }

}