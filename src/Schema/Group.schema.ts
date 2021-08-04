import {_document as _user}  from '../Interface/IUser.model';
import { IGroup , _document} from '../Interface/IGroup.model';
import mongoose from "mongoose";
import validator from 'validator';
const schema = mongoose.Schema;
let definition: any = new schema<IGroup>(
    {
        groupName : {
            type: schema.Types.String,
            required: true,
            trim: true,
        },
        users : [{ // user_id => [R,W,E]
            type: Map,
            of: new schema({
                user:{
                    type:schema.Types.ObjectId,
                    ref :_user
                },
                permission : {
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


const GroupSchema = mongoose.model<IGroup>(_document, definition);

export default GroupSchema;