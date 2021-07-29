import UserService from "../Service/UserService";
class SignController {
      public static register = async (req: any, res: any, next: any) => {
            const data = await UserService.signup(req.body);
            res.json(data);
            next();
      }
      public static login = async (req: any, res: any, next: any) => {
            res.json(res.data);
            next();
      }

      public static getProfile = async (req: any, res: any, next: any) => {
            res.status(200).json(res.user);
            next();
      }
      public static updateProfile = async (req: any, res: any, next: any) => {
            const data = await UserService.updateProfile(req.body);
            res.json(data);
            next();
      }
}

export default SignController;