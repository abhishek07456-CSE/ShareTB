import { ObjectId ,Types} from 'mongoose';
import { BaseModel } from './BaseModel';
export const _document = "group";
export interface IGroup extends BaseModel{
    _id?:ObjectId;
    name?: string;
    users?:Map<ObjectId,[]>;
    createdBy?:ObjectId;
    updatedBy?:ObjectId;
}