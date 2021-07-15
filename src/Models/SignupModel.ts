import Model from "./Model";
export default class SignupModel extends Model{
    private static schema = "user";
    public static getSchema = () => SignupModel.schema;
    public saveSignupDetails = (data:any) => {
        SignupModel.insert(SignupModel.schema , data);
    }
}