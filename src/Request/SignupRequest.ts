import mongoose from "mongoose";
import validator from 'validator';
const schema = mongoose.Schema;
var signupSchema: any = new schema({
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
    }
});
export default mongoose.model("users", signupSchema);