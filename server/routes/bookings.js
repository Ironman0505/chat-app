const express=require("express")

const bookingRoute=express.Router();
const allSlotModel=require("./../models/allsolots");
const userSlotModel=require("./../models/userslots");

bookingRoute.get("/userData",async (req,res)=>{


     const email=req.body.mail;
     try{
        const dbresp= await userSlotModel.findOne({email:email});
        const booked=dbresp.booked;
        return res.json({msg:"Success",payload:booked})
     }
     catch(er){
        return res.json({msg:"Error",payload:er})
     }
     


})

bookingRoute.get("/allbookings",async(req,res)=>{

    try{
        const dbresp=await allSlotModel.find();
        const booked=dbresp.booked;
        return res.json({msg:"Success",payload:booked})
    }
    catch(er){
       return res.json({msg:"Error",payload:er})
    }
    

})


module.exports=bookingRoute;