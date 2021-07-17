import SignupModel from "../Request/SignupRequest";
import DbsAction from "../providers/DbsAction";
export default class SignupService {
      public static signUpService = async (request: any) => {
            let model = new SignupModel({
                  email: request.email ?? null,
                  first_name: request.first_name ?? null,
                  last_name: request.last_name ?? null,
                  password: request.password
            });
            return await DbsAction.save(model);
      }
}
