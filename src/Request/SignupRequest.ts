import mongoose from "mongoose";
const schema = mongoose.Schema;
var userSchema = new schema({
    email: {
        type: schema.Types.String,
        required: true
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
mongoose.model('user',userSchema);