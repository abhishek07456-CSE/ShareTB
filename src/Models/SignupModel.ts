import Model from "./Model";
export default class SignupModel extends Model{
    protected collection : String = "user";
    public saveSignupDetails = (data:any) => {
       return this.save(data);
    }
}