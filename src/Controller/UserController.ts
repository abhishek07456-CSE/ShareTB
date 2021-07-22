import { Authenticator } from './../Middleware/Authenticator';
import LoginRequest from "../Request/LoginRequest";
import SignupService from "../Service/UserService";
class SignController {
      public static  register = async(req : any ,res : any , next : any) => {
            const data = await SignupService.signup(req.body);
            res.json(data);
            next();
      }
      public static  login = async (req : LoginRequest , res : any , next : any) => {
                let requestData = new LoginRequest().validateRequest(req,next);
                if(requestData.error) return res.json(requestData.error);
                let token =  Authenticator.getToken(req);
                console.log(token);
                res.send(requestData.value)
                next();
      }
}

export default SignController;