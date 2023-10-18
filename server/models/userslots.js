const mongoose=require("mongoose")

// User Booked slots schema...
const slotSchema=new mongoose.Schema({
    email:String,
    booked:[
        {
            date: Date,
            slots: [Number]
        }
    ]

})


const userSlotModel=mongoose.model("userslot",slotSchema);

module.exports=userSlotModel;