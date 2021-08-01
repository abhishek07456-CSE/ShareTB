import DocumentService from "../Service/Document.service";
class DocumentController {
      public static createDocument = async (req: any, res: any, next: any) => {
            const data = await DocumentService.createDocument(req.body);
            res.json(data);
            next();
      }
}

export default DocumentController;