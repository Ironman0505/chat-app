import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const thunkFn=createAsyncThunk("Thanos thunk",async (url,thunkApi)=>{
            try{
                let res=await fetch(url);
                let data=await res.json();
                return data;
            }
            catch(er){
                return  thunkApi.rejectWithValue(er);
            }
})


export const slice2=createSlice({
    name:"THUNKK",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(thunkFn.pending,(curstate,actionObj)=>{})
    }
       
})

export default slice2.reducer;