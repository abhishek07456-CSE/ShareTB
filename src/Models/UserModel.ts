import { Authenticator } from './../Middleware/Authenticator';
import { ObjectId } from 'mongoose';
import { resolve } from 'url';
import UserRepository from '../Repository/UserRepository';
export default class UserModel{
    userRepo : UserRepository;
    constructor(data?:any){
         this.userRepo = new UserRepository();
         if(data){
            this.userRepo = {...data};
         }
    }
    public getUserById =  (_id : ObjectId) => {
       return this.userRepo.findById(_id).then((data) => {
           return data;
       }).catch((err)=>{
           throw err;
       });
    }
    public updateDetails = (data:any) => {
        const auth_id = Authenticator.id;
        return this.userRepo.update(auth_id, data).then((data) => {
            return data;
        }).catch((err)=>{
            throw err;
        });
    }
}