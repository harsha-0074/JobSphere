import mongoose, { ModifiedPathsSnapshot } from "mongoose";

const comments = new mongoose.Schema({
    userId : {
       type : mongoose.Schema.Types.ObjectId,
       ref : "User"
    },
    connectionId : {
       type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    body : {
       type : String,
       required : true
    }
});

const comment = mongoose.model("comment" , comments);

export default comment;