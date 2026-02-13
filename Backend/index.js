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
    const connectDB = await mongoose.connect("")

    app.listen(8080,()=>{
        console.log("Server Running");
    })
}

start();
