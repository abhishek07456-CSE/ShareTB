import { ObjectId } from 'mongoose';
import { resolve } from 'url';
import UserRepository from '../Repository/UserRepository';
export default class UserModel{
    userRepo : UserRepository;
    constructor(){
        this.userRepo = new UserRepository();
    }
    public getUserById =  (_id : ObjectId) => {
       return this.userRepo.findById(_id).then((data) => {
           return data;
       }).catch((err)=>{
           throw err;
       });
    }
}