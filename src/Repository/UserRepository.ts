import { RepositoryBase } from "./RepositoryBase";
import { IUserModel } from "../Interface/IUserModel";
import UserSchema from '../Schema/UserSchema';
export default class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(UserSchema);
    }
}
