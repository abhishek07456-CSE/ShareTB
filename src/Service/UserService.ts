import SignupModel from "../Request/SignupRequest";
import DbsAction from "../providers/DbsAction";
import {encrypt} from './EncryptDecrypt';
export default class SignupService {
      public static signup = async (request: any) => {
            console.log(encrypt(request.password));
            let model = new SignupModel({
                  email: request.email || null,
                  first_name: request.first_name || null,
                  last_name: request.last_name || null,
                  password: encrypt(request.password) || null
            });
            return await DbsAction.save(model);
      }
}
