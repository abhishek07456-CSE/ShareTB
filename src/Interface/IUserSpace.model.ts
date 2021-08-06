import { ObjectId ,Types} from 'mongoose';
import { BaseModel } from './BaseModel';
export const _document = "user_space";
export interface IUserSpace extends BaseModel{
    _id?:ObjectId;
    spaceName?: string;
    users?:Map<ObjectId,[]>;
    createdBy?:ObjectId;
    updatedBy?:ObjectId;
}