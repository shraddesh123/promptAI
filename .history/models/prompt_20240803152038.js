import { Ref } from "git";
import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt:{
        type: String,
        required: [true,'prompt is required.'],
    }
})