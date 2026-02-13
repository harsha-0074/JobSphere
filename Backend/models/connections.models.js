import mongoose from "mongoose";

const connectionReq = new mongoose.Schema({
    userId : {
       type : mongoose.Schema.Types.ObjectId,
       ref : "User"
    },
    connectionId : {
       type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    statusID : {
       type : Boolean,
       default : NULL
    }
});

const connectionRequest = mongoose.model("ConnectionRequest" , connectionReq);

export default connectionRequest;