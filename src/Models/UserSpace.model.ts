import { IUserSpace } from './../Interface/IUserSpace.model';
import UserSpaceRepository from '../Repository/UserSpace.repository';
import { Storage } from '../providers/Storage/Storage';
export default class UserSpaceModel{
    userSpaceRepo: UserSpaceRepository;
    constructor() {
        this.userSpaceRepo = new UserSpaceRepository();
    }
    public  createGroup(data: IUserSpace) {
       return this.userSpaceRepo.create(data)
        .then((data : IUserSpace) => {
            return data;
        }).then((data : IUserSpace) => {
            const response =  Storage.init().createContainer(data._id);
            return response;
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    }
}