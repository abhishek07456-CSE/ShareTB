import { BaseModel } from './BaseModel';
export const _document = "user";
export interface IUser extends BaseModel{
    email: string;
    first_name: string;
    last_name: number;
    password: string;
    is_verified? : boolean;
    age?:number;
    gender?:string;
}