import { RepositoryBase } from "./RepositoryBase";
import { IUser } from "../Interface/IUser.model";
import UserSchema from '../Schema/UserSchema';
export default class UserRepository extends RepositoryBase<IUser> {
    constructor() {
        super(UserSchema);
    }
}
