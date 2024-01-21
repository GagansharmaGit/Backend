// require('dotenv').config()
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})

import connectDB from "./db/index.js"
import express from "express"
const app = express();
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})























/*
const app = express()
// IIFE FUNCTION
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERROR")
            throw error
        })
        app.listen(process.env.PORT,function(){
            console.log(`app Listen on port : , ${process.env.PORT}`)
        })
    }
    catch(err){
        console.log("ERROR:", err)
        throw err
    }
})()*/