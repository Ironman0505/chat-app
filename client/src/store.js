import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slices/slice1"
import slice2Reducer from "./slices/slice2"


export  const store=configureStore({
    reducer:{
        samples:slice1Reducer,
        thunk:slice2Reducer
    }
})