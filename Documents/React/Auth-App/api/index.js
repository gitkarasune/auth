import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// The dotenv file to init
dotenv.config();

mongoose.connect(process.env.MONGODB).then (() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});