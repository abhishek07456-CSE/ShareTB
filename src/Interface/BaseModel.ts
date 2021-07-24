import * as Mongoose from 'mongoose';
export interface BaseModel extends Mongoose.Document {
    created_at: Date;
    modified_at: Date;
    deleted_at: Date;
}