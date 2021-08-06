import UserSpaceModel from "../Models/UserSpace.model";
import { IUserSpace } from "../Interface/IUserSpace.model";
export default class UserSpaceService {
    public static async createUserSpace(data: IUserSpace) {
       const userSpace = new UserSpaceModel();
         return await userSpace.createGroup(data);
    }
}