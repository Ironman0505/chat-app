const express=require("express");
const randomstring=require("randomstring")
const otpModel=require('./../models/sample')
const mongoose=require("mongoose")
const nodemailer = require('nodemailer');

const verifyRoute= express.Router();




const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'mendukowshikreddy@gmail.com',
    pass: 'fnqtkoelvszrdwka',
  },
});






verifyRoute.post("/otpgen",async (req,res)=>{

    const email=req.body.email;
    console.log(req.body);

    const otp = randomstring.generate({ length: 6, charset: 'numeric' });
    const expiry = Date.now() + 30000;

    const newObj={
        email:email,
        otp:otp,
        expiry:expiry
    }
    console.log(otp);

  const dbres= await otpModel.insertMany(newObj);
  console.log("OTP Generated!")

  const mailOptions = {
    from: 'mendukowshikreddy@gmail.com',
    to: email,
    subject: 'OTP Verification Code',
    text: `Your OTP for verification: ${otp}. Its expires in 60secs!`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return res.json({ msg: 'OTP sent to email' });
  } catch (error) {
    console.error('Error sending OTP email:', error);
   return res.status(500).json({ msg: 'Error sending OTP email' });
  }


    // res.json({msg:"Check Your mail for OTP!..."})
})


verifyRoute.post("/verifyOtp",async(req,res)=>{
    const resOtp=req.body.otp;
    const email=req.body.mail;
    const userObj=await otpModel.findOne({email:email});
    const dbOtp=userObj.otp;
    const expiry= userObj.expiry - Date.now() ;
    console.log(dbOtp+" "+resOtp+" expiry : "+expiry);
    if(expiry<0){
      const act=await otpModel.findOneAndDelete({email:email});
       return res.json({msg:"OTP Expired!...Retry "});
    }
    else{
        if(resOtp==dbOtp){
          const act=await otpModel.findOneAndDelete({email:email});
          return  res.json({msg:"Succesfull User verification.."})
        }
        else{
          const act=await otpModel.findOneAndDelete({email:email});
            return  res.json({msg:"Wrong OTP Try Again"})
        }
    }
})


module.exports=verifyRoute