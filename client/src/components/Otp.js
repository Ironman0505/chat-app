import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import UserDboard from './UserDboard';

function Otp(props) {
const [otp,setOtp]=useState("");
const [userverified,setUserVerified]=useState(false)

// const location = useLocation();
// const queryParams = new URLSearchParams(location.search);
const mail = props.mail;
// console.log(mail);
const navigate=useNavigate();

const sendfn=async()=>{
    
let res=await axios.post("http://localhost:3333/verify/verifyOtp",{mail:mail,otp:otp});


console.log(res.data.msg);

if(res.data.msg=="Succesfull User verification.."){
    setUserVerified(true);
}

}

  return (
    <div>
         {
            userverified ? <UserDboard mail={mail}/> :
        <>
        Pls enter the OTP!
 <input type='email' onChange={e=>setOtp(e.target.value)} />
        <button onClick={sendfn} >Check</button>
        </>
        }
    </div>
    
  )
}

export default Otp