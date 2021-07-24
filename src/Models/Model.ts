import DbsAction from "../providers/DbsAction";
export default class Model{
    protected collection: String;
    protected save = (...args) => {
        return DbsAction.operation(DbsAction.insert)(this.collection)(args[0]);
    }
}