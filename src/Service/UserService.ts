import UserModel from "../Models/UserModel";
import User from "../Schema/UserSchema";
import { IUserModel } from "../Interface/IUserModel";
export default class SignupService {
      public static signup = async (request: any) => {
            const user: IUserModel = new User();
            user.email = request.email;
            user.first_name = request.first_name;
            user.last_name = request.last_name;
            user.password = request.password;
            // to-do : handle try catch separate in framework
            return await user.save().catch((err) => {
                  console.log(err);
            });
      }
}
