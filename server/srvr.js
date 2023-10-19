const express=require('express')
const cors=require('cors')
const {Server}=require("socket.io")


const http=require("http")
const path=require("path")
// const smplmodel=require('./models/sample')
// const mongoose=require("mongoose")

// const verifyRoute=require('./routes/verifyRoute')
// const bookingRoute=require("./routes/bookings")
const app=express();

app.use(cors())

app.use(express.static(path.join(__dirname,'./../client/build')));
// -----------Socket Code...
const server=http.createServer(app);

const io=new Server(server)
// ,{
//     cors:{
//         origin:"http://localhost:3000",
//         methods:["GET","POST"]
//     }
// }

io.on("connection",(socket)=>{
    console.log("A new entry into socket");

    // For BroadCasting....
    // socket.on("msg1",(data)=>{
    //     socket.broadcast.emit("replymsg",data);
    // })

    // For a particular room
    socket.on("joinRoom",(room)=>{
        socket.join(room)
    })

    socket.on("msg1",(data)=>{
        console.log(data)
        socket.to(data.room).emit("replymsg",data.msg)
    })


})

app.use('*',(re,res)=>{
    res.sendFile(path.join(__dirname,'./../client/build/index.html'));
})

server.listen(3003,()=>{
    console.log("Listening!!!")
})

// -------------------------







// // const newOTP = {
// //     email: 'example@example.com',
// //     otp: '123456',
// //     expiry: new Date(),
// //   };

// mongoose.connect('mongodb://127.0.0.1:27017/bookingDb')
// .then(()=>console.log("Success"))
// .catch(er=>console.log(er));

// // const res= smplmodel.insertMany(newOTP);





// app.use(express.json())

// // app.get("/test",(req,res)=>{
// //     console.log("Call camed");
// //     res.json({msg:"Hello World"});
// // })

// app.use("/verify",verifyRoute);
// app.use("/bookings",bookingRoute);

// // const fn=async ()=>{
// //     const resp= await smplmodel.findOne({email:'example@example.com'});
// //     console.log(resp);
// // }

// // fn();




// app.listen(3333,()=>{
//     console.log("Running!");
// })