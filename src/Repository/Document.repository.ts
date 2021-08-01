import { RepositoryBase } from "./RepositoryBase";
import { IDocument } from "../Interface/IDocument.model";
import DocumentSchema from "../Schema/Document.schema";
export default class DocumentRepository extends RepositoryBase<IDocument> {
    constructor() {
        super(DocumentSchema);
    }
}
