const mongoose= require("mongoose");

const signupSchema = {
    fname:String,
    email:String,
    phone : String,
    password: String,
    subject:String
}

const Signups = mongoose.model("Signups",signupSchema);

module.exports=Signups;