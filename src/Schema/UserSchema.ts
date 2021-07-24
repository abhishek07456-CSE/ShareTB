import { IUserModel } from '../Interface/IUserModel';
import mongoose from "mongoose";
import validator from 'validator';
import { beforeSaveHook } from "./BaseMiddleware";
const schema = mongoose.Schema;
var UserSchema: any = new schema<IUserModel>(
    {
        email: {
            type: schema.Types.String,
            required: true,
            unique: true,
            validate: (value) => {
                return validator.isEmail(value)
            }
        },
        first_name: {
            type: schema.Types.String,
            required: true,
        },
        last_name: {
            type: schema.Types.String,
            required: true,
        },
        password: {
            type: schema.Types.String,
            required: true,
            validate: (value) => {
                return validator.isStrongPassword(value)
            }
        }
    },
    {
        timestamps: true
    }
);

// UserSchema.pre('save', (next) => {
//     beforeSaveHook(this);
//     next();
// });
const User = mongoose.model<IUserModel>('user', UserSchema);

export default User;