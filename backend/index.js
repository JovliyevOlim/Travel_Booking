import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoutes from './routes/tours.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import reviewRoutes from './routes/reviews.js'
import bookingRoutes from './routes/bookings.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}

app.get("/",(req,res)=>{
    res.send("api is working")
})

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


// database connection
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB database connected")
    }catch(err){
        console.log("MongoDB database connection failed")
    }
}



app.use("/api/v1/tours",tourRoutes);
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/review",reviewRoutes);
app.use("/api/v1/booking",bookingRoutes);

app.listen(port,()=>{
    connect();
    console.log("server listening on port" , port)
})