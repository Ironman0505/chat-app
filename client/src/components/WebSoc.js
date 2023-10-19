import React from 'react'
import io  from "socket.io-client";
import { useEffect,useState } from 'react';

const srvradd="https://alienx-chat-demo.glitch.me"
const add2="https://alienx-chat.onrender.com"
const socket=io()

function WebSoc() {
    const [msg,Setmsg]=useState();
    const [room,setRoom]=useState();
    const [showData,setShowData]=useState([]);
    const [sentMsg,setSentMsg]=useState([]);

    const sendMsg=()=>{
        setSentMsg((sentmsg)=>[...sentmsg,msg]);
        socket.emit("msg1",{msg,room});
    }

    const joinRoom=()=>{
        socket.emit("joinRoom",room);
        alert("Welcome to room "+room);
    }

    useEffect(()=>{
        socket.on("replymsg",(msg)=>{
            setShowData((showData)=>[...showData,msg]);
        })
    },[socket])

  return (
    <div>
        
        <h2 style={{textAlign:"center"}} >Hello Websockets</h2>
        <br/>
        <input type='text' onChange={e=>setRoom(e.target.value)} />
        <br/>
        <button onClick={joinRoom} >Join Room</button>
        <br/>
        <br/>
        <input type='text' onChange={e=>Setmsg(e.target.value)} />
        <br/>
        <button onClick={sendMsg} >Send Msg</button>
       
    {
        showData && 

           showData.map(msg=>(
            <p style={{"textAlign":"start"}} >{msg}</p>
           ))
        
    }
     {
        sentMsg && 

           sentMsg.map(msg=>(
            <p style={{"textAlign":"end"}} >{msg}</p>
           ))
        
        }
    </div>
  )
}

export default WebSoc