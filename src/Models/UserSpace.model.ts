import { IUserSpace } from './../Interface/IUserSpace.model';
import UserSpaceRepository from '../Repository/UserSpace.repository';
import { Storage } from '../providers/Storage/Storage';
export default class UserSpaceModel{
    userSpaceRepo: UserSpaceRepository;
    constructor() {
        this.userSpaceRepo = new UserSpaceRepository();
    }
    public async createGroup(data: IUserSpace) {
        const response = await Storage.init().createContainer("hello");
        return response;
        return this.userSpaceRepo.create(data)
        .then((data : IUserSpace) => {
            const service = Storage.init();
            return data;
        }).then((data : IUserSpace) => {
            const response = Storage.init().createContainer(data._id);
            console.log(response);
            return data;
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    }
}