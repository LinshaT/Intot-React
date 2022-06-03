const express = require("express");
const app = express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Linsha:Linsha%4092@cluster0.xnezx.mongodb.net/intotDB")

app.use("/",require("./routes/signupRouts"));

app.listen(3001,function(){
    console.log("express sserver running on port 3001");
})


