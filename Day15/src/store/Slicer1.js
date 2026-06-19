import {createSlice} from "@reduxjs/toolkit";

const reactSlicer=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        Increment:(state,actions)=>{if (actions.payload !== undefined) {
            state.count += actions.payload; // Add the form number
        } else {
            state.count += 1; // Add 1 for the standard button
        }},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0},
    }
});

export const {Increment,Decrement,Reset}=reactSlicer.actions;
export default reactSlicer.reducer;