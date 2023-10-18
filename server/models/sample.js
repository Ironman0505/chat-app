const mongoose=require("mongoose")

const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    otp:Number,
    expiry:Date
})


const otpModel=mongoose.model("otp",otpSchema);

module.exports=otpModel