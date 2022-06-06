
const express= require("express");
const router=express.Router();

// const Signup = require("../models/signupModel");

const Signups=require("../models/signupModel");

router.route("/create").post((req,res)=>{
const fname=req.body.fname;
const email=req.body.email;
const phone=req.body.phone;
const password=req.body.password;
const subject=req.body.subject;

const newSign = new Signups({
    fname,
    email,
    phone,
    password,
    subject
});

newSign.save();

});

    router.route("/users").get((req,res)=>{
        Signups.find()
        .then(foundUsers => res.json(foundUsers))
    });

module.exports=router;

