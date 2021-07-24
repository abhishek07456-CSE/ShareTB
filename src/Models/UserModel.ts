import { IUserModel } from './../Interface/IUserModel';
export default class UserModel{
    private user : IUserModel;
    constructor(user : IUserModel){
        this.user = user;
    }
    public setEmail = (email : string) : void => {
        this.user.email = email;
    }
}