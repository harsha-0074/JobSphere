import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "../Backend/routes/posts.routes.js"

dotenv.config();

const app = express();

app.use(postRoutes);
app.use(express.json());
app.use(cors());

const start = async ()=>{
    const connectDB = await mongoose.connect("mongodb+srv://harshakeerthi8500_db_user:bfd2xWzAZptGknPD@jobsphere.sndtujp.mongodb.net/?appName=JobSphere")

    app.listen(8080,()=>{
        console.log("Server Running");
    })
}

start();