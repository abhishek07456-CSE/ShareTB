import { IUserModel } from '../Interface/IUserModel';
import mongoose from "mongoose";
import validator from 'validator';
import { encrypt } from '../Service/EncryptDecrypt';
const schema = mongoose.Schema;
let definition: any = new schema<IUserModel>(
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
            },
            set: (value: string): string => {
                return encrypt(value);
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
const UserSchema = mongoose.model<IUserModel>('user', definition);

export default UserSchema;