import SignupModel from "../Models/SignupModel";
class SignController {
      public static  registration_Controller = (req : any ,res : any) : any => {
            console.log(req.body);
            let data = new SignupModel().saveSignupDetails(req.body);
            res.send(data);
      }
}

export default SignController;