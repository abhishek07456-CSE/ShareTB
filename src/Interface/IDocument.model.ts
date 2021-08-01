import { ObjectId } from 'mongoose';
import { BaseModel } from './BaseModel';
export const _document = "document";
export interface IDocument extends BaseModel{
    _id?:ObjectId;
    name?: string;
    size?: number;
    parent: ObjectId;
    children: ObjectId[];
    path?: string;
    type?:string;
    created_by?:ObjectId;
    updated_by?:ObjectId;
}