import {_document as _user}  from '../Interface/IUser.model';
import { IUserSpace , _document} from '../Interface/IUserSpace.model';
import mongoose from "mongoose";
import { ActionUserUpdate } from './BaseMiddleware';
const schema = mongoose.Schema;
let definition: any = new schema<IUserSpace>(
    {
        spaceName : {
            type: schema.Types.String,
            required: true,
            trim: true,
        },
        users : [{ // user_id => [R,W,E]
            type: new schema({
                user:{
                    type:schema.Types.ObjectId,
                    ref :_user,
                    required:true
                },
                permission : {
                    type : schema.Types.Mixed,
                }
            }),
        }],
        createdBy: {
            type: schema.Types.ObjectId,
        },
        updatedBy: {
            type: schema.Types.ObjectId,
        }
    },
    {
        timestamps: true
    }
);
definition.pre('save'  , ActionUserUpdate);
definition.pre('update', ActionUserUpdate);
definition.pre('delete', ActionUserUpdate);


const userSpaceSchema = mongoose.model<IUserSpace>(_document, definition);

export default userSpaceSchema;