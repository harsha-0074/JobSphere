import mongoose from "mongoose";


const educationSchema = new mongoose.Schema({
    school:{
       type : String,
        default : ''
    },
    degree : {
       type : String,
        default : ''
    },
    fieldOfStudy : {
       type : String,
        default : ''
    }
});

const workingSchema = new mongoose.Schema({
    company : {
        type : String,
        default : ''
    },
    position : {
        type : String,
        default : ''
    },
    years : {
        type : String,
        default : ''
    }
});

const profileSchema = new mongoose.Schema({
    userId :{

    },
    bio:{
        type : String,
        default : ''
    },
    currPost : {
        type : String,
        default : ''
    },
    passWork : {
        type : [workingSchema],
        default : []
    },

    education :{
        type : [workingSchema],
        default : []
    }
});


const Profile = mongoose.Schema("Profile" , profileSchema);

export default Profile  ;

