import DB from "./DB";
export default class DbsAction extends DB{
    public static operation = (callable) => (schema) => (data) => callable(schema,data);
    public static insert = (schema: any, data: any) => {
        DB.db.collection(schema).insert(data, (err: any, result: any): any => {
        if (err)
            return { err: err.message };
        return result;
     });
   }
}
