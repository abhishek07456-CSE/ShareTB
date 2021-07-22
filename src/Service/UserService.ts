import SignupModel from "../Request/SignupRequest";
import DbsAction from "../providers/DbsAction";
import {encrypt} from './EncryptDecrypt';
import { User } from "../entity/User";
import {getManager, getRepository} from "typeorm";
export default class SignupService {
      public static signup = async (data: any) => {
            const user = new User();
                  user.setFirstName(data.first_name);
                  user.setLastName(data.last_name);
                  user.setEmail(data.email);
                  user.setPassword(data.password);
            return await user.save();
      }
}
