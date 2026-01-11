const express=require("express");

const dotenv=require("dotenv");
const { connectToDataBase } = require("./config/db");
const app=express();


dotenv.config();
const port=process.env.PORT || 5000;

connectToDataBase()
app.listen(port, ()=>{
    console.log(`Server is Listening at ${port}`);
})