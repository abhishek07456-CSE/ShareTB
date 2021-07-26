import { ObjectId } from 'mongoose';
import { IUserModel } from './../Interface/IUserModel';
import UserRepository from '../Repository/UserRepository';
export default class UserModel{
    userRepo : UserRepository;
    constructor(){
        this.userRepo = new UserRepository();
    }
    public getUserById =  (_id : ObjectId) => {
        return  this.userRepo.findById(_id ,(err,result)=> {
            return result;
        });
    }
}