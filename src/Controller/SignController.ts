import SignupService from "../Service/SignupService";
class SignController {
      public static  registration_Controller = async(req : any ,res : any) => {
            const data = await SignupService.signUpService(req.body);
            console.log(data);
            res.json(data);
      }
}

export default SignController;