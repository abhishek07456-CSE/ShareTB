import LoginRequest from './../Request/LoginRequest';
class LoginController {
    public static  login = async (req : LoginRequest , res : any , next : any) => {
        //   const requestData = new LoginRequest().validation(Request.body);
        //   const data = await LoginService.signUpService(req.body);
        //   res.json(data);
            const requestData = new LoginRequest().validateRequest(req,next);
            console.log(requestData);
            // res.send("hello world");
            next(requestData);
    }
}

export default LoginController;