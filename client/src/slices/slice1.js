import { createSlice } from "@reduxjs/toolkit";

const slice1=createSlice({
    name:"Sample Slice",
    initialState:[0,33],
    reducers:{
        modify:(curstate,action)=>{
             curstate.push(action.payload);
        }
    }
})

export const {modify}=slice1.actions;

export default slice1.reducer;