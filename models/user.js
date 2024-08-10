import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: 'string',
        required: [true, 'Email already exists'],
        unique: [true, 'Email already exists'],
    },
    username: {
        type: 'string',
        required: [true, 'Username already exists'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: 'string',
    }
});

const User = models.User || model("User", UserSchema);
export default User;