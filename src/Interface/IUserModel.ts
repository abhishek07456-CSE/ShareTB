import { BaseModel } from './BaseModel';
export interface IUserModel extends BaseModel{
    email: string;
    first_name: string;
    last_name: number;
    password: string;
    findByEmail():any;
}