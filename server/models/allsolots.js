const mongoose=require("mongoose")

const allSlotSchema=new mongoose.Schema({
    booked:[
        {
            date: Date,
            slots: [Number]
        }
    ]

})


const allSlotModel=mongoose.model("allslot",allSlotSchema);

module.exports=allSlotModel;