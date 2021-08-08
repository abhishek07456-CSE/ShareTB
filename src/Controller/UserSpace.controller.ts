import UserSpaceService from "../Service/UserSpace.service";
class UserSpaceController {
      public static createUserSpace = async (req: any, res: any, next: any) => {
            const data = await UserSpaceService.createUserSpace(req.body);
            res.json(data);
            next();
      }
}

export default UserSpaceController;