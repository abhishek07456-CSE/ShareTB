import * as Mongoose from 'mongoose';
export interface BaseModel extends Mongoose.Document {
    deletedAt?: Date;
}