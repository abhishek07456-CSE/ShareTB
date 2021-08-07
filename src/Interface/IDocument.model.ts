import { ObjectId ,Types} from 'mongoose';
import { BaseModel } from './BaseModel';
export const _document = "document";
export interface IDocument extends BaseModel{
    _id?:ObjectId;
    name?: string;
    size?: number;
    space?:ObjectId;
    parent?: ObjectId;
    children?:ObjectId[];
    path?: string;
    type?:string;
    createdBy?:ObjectId;
    updatedBy?:ObjectId;
}