import mongooose from "mongoose";

const { Schema } = mongooose;

const UserSchema = new mongooose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
    },

},
{timestamps: true});

export default mongooose.model("User", UserSchema)