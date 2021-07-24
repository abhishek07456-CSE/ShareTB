import { Authenticator } from './../Middleware/Authenticator';
import LoginRequest from "../Schema/LoginRequest";
import SignupService from "../Service/UserService";
class SignController {
      public static  register = async(req : any ,res : any , next : any) => {
            const data = await SignupService.signup(req.body);
            res.json(data);
      }
      public static  login = async (req : any , res : any , next : any) => {
                let token =  Authenticator.getToken(req);
                console.log(token);
                next();
      }
}

export default SignController;