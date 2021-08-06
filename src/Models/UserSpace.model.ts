import { IUserSpace } from './../Interface/IUserSpace.model';
import UserSpaceRepository from '../Repository/UserSpace.repository';
export default class UserSpaceModel{
    userSpaceRepo: UserSpaceRepository;
    constructor() {
        this.userSpaceRepo = new UserSpaceRepository();
    }
    public createGroup(data: IUserSpace) {
        console.log(data);
        return this.userSpaceRepo.create(data).then((data) => {
            return <IUserSpace>data;
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    }
}