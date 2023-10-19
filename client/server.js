const express=require('express')
const cors=require('cors')
const {Server}=require("socket.io")
const path=require("path")

const http=require("http")
const exp = require('constants')
require("dotenv").config()
const app=express();

// app.use(cors())
app.use(express.static(path.join(__dirname,'./build')));

// -----------Socket Code...
const server=http.createServer(app);

const io=new Server(server)

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


server.listen(5555,()=>{
    console.log("Listening!!!")
})