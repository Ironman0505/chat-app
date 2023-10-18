import React from 'react'

import {useForm} from 'react-hook-form'
import { useState } from 'react';
import axios from 'axios';

import {Routes, useNavigate,Route} from 'react-router-dom'
import Otp from './Otp';


function Verify() {

// const {register,handleSubmit,formState:{err}}=useForm();

const [getOtp,setGetotp]=useState(false)
const [mail,setMail]=useState("");
const navigate=useNavigate();

const sendfn=async ()=>{
console.log(mail);

let res=await axios.post("http://localhost:3333/verify/otpgen",{email:mail});

console.log(res.data.msg);
setGetotp(true)
}

  return (
    <div>
       {
            getOtp ? <Otp mail={mail} /> :
            <>
            <h2>Verify</h2>
            <input type='email' onChange={e=>setMail(e.target.value)} />
            <button onClick={sendfn} >Send OTP</button>
            </>
       }
      

    </div>
  )
}

export default Verify