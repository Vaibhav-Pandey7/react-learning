import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { Increment,Decrement,Reset } from "../store/Slicer1";
export default function Counting(){

    const count=useSelector((state)=>state.slice1.count)//here State is a global object that has info about all the slices created in the store
    const [amount,setAmount]=useState(0);
    const [buttontext,setbuttontext]=useState("Submit");
    const dispatch=useDispatch();
    let val=0;
    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={()=>{dispatch(Increment())}}>Increment</button>
            <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(Reset())}}>Reset</button>

            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(Increment(Number(amount))); 
                setTimeout(()=>{
                    setbuttontext("Submit");
                    setAmount(0);
                },500);
            }}>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} 
                    />
                <button type="submit" onClick={()=>{
                    setbuttontext("Subnitted");
                }}>{buttontext}</button>
            </form>
        </>
    );
}
