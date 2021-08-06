import { RepositoryBase } from "./RepositoryBase";
import { IUserSpace } from "../Interface/IUserSpace.model";
import userSpaceSchema from "../Schema/UserSpace.schema";
export default class UserSpaceRepository extends RepositoryBase<IUserSpace> {
    constructor() {
        super(userSpaceSchema);
    }
}
