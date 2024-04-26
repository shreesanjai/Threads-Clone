import mongoose from "mongoose";
import { mergeConfigs } from "tailwind-merge";
import { date } from "zod";

 const threadSchema = new mongoose.Schema({
    text : {  type: String, required: true },
    author : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : true
    },
    community : {
        type : mongoose.Schema.ObjectId,
        ref : 'Community',
    },
    createdAt : {
        type : Date ,
        default : Date.now
    },
    parentId : {
        type : String ,
        children : [
            {
                type : mongoose.Schema.ObjectId,
                ref : 'Thread'
            }
        ]
    }

});

const Thread = mongoose.models.Thread || mongoose.model('Thread',threadSchema);

export default Thread;