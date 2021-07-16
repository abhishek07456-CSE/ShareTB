import SignupModel from "../Models/SignupModel";
class SignController {
      public static  registration_Controller = (req : any ,res : any) : any => {
            const data = new SignupModel().saveSignupDetails(req.body);
            res.send(data);
      }
}

export default SignController;