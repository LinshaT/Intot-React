const express= require("express");


const router=express.Router();
// const Signup = require("../models/signupModel");

const Signup=require("../models/signupModel");

router.route("/create").post((req,res)=>{
const fname=req.body.fname;
const email=req.body.email;
const phone=req.body.phone;
const subject=req.body.subject;

const newSign = new Signup({
    fname,
    email,
    phone,
    subject
});

newSign.save();

})

module.exports=router;

