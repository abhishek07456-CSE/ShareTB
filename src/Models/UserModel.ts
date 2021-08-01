import { Authenticator } from './../Middleware/Authenticator';
import { ObjectId } from 'mongoose';
import UserRepository from '../Repository/UserRepository';
export default class UserModel {
    userRepo: UserRepository;
    constructor(){
        this.userRepo = new UserRepository();
    }
    public getUserById = (id?: ObjectId) => {
        const user_id : ObjectId = id || Authenticator.id;
        return this.userRepo.findById(user_id).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }
    public updateDetails = (data: any) => {
        const auth_id = Authenticator.id;
        return this.userRepo.update(auth_id, data).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }

    public saveDetails = (data: any) => {
        return this.userRepo.create(data).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }
}