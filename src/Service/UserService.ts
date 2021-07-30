import UserModel from "../Models/UserModel";
import UserSchema from "../Schema/User.schema";
export default class UserService {
      public static signup = async (request: any) => {
            const user = new UserModel();
            return await user.saveDetails(request);
            // const user: any = new UserSchema();
            // user.email = request.email;
            // user.first_name = request.first_name;
            // user.last_name = request.last_name;
            // user.password = request.password;
            // // to-do : handle try catch separate in framework
            // return await user.save().catch((err) => {
            //       console.log(err);
            // });
      }
      public static updateProfile = async (request: any) => {
            const user = new UserModel();
            return await user.updateDetails(request);
      }
}
