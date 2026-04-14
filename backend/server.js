import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js"


dotenv.config();// read .env file and load variable into process.env


// creating backend server using express(app is backend server)
const app =express();

//middleware  --- will run before request reaches to route
app.use(cors()); //allows frontend to talk to backend
app.use(express.json());  //convert incoming data into JSON


//this line connects everything
// when req starts with /api/todos send it to todoRouters.js
app.use("/api/todos", todoRoutes);   //this line create the bridge between files

//add this route here
app.get("/",(req,res)=>{
    res.send("API running...")
});

//database conncetion   //runs when server start at the time of execution
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.log(err));


//app is listining on the port
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});



