
const express=require("express");
const router=require("./ROUTER/testrouter");
const connectDB = require("./db");
const router1 = require("./ROUTER/userrouter");
const router2 = require("./ROUTER/userrouter1");
const  dotenv = require("dotenv");

const app=express();
app.use(express.json());
connectDB();
dotenv.config();


// app.use("/",router)
// app.use("/",router1)
app.use("/",router2)



const PORT=7000;
app.listen(PORT,()=>console.log(`server is running at ${PORT}........`))