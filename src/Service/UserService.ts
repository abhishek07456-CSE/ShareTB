import UserModel from "../Models/UserModel";
import UserSchema from "../Schema/UserSchema";
export default class UserService {
      public static signup = async (request: any) => {
            const user: any = new UserSchema();
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
