const mongoose= require("mongoose");

const signupSchema = {
    fname:String,
    email:String,
    phone : String,
    subject:String
}

const Signup = mongoose.model("Signup",signupSchema);

module.exports=Signup;