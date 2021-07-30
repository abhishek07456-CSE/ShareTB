import { ObjectId } from 'mongoose';
import { BaseModel } from './BaseModel';
export const _document = "document";
export interface IDocument extends BaseModel{
    name?: string;
    size?: number;
    parent: ObjectId;
    children: ObjectId[];
    path?: string;
    type?:string;
}