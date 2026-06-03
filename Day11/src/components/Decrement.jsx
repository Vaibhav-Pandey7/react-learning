import { useContext } from "react";
import GlobalContext from "../GlobalContext";
export default function  Decrement(){
    const data=useContext(GlobalContext);
    return(
        <>
            <h1 onClick={()=>{data.setcount(data.count-1)}}>Child Counter is: {data.count}</h1>
            <button onClick={()=>{data.setcount(data.count-1)}}>Decrement</button>
        </>
    );
}