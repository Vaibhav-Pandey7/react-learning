import { configureStore } from "@reduxjs/toolkit";
import reducerSlice1 from "./Slicer1"

const store=configureStore({
    reducer:{
        slice1:reducerSlice1,
    }
})

export default store;