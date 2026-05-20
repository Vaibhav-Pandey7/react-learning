import { useEffect,useState } from "react";
import {createRoot}from "react-dom/client";
import Colourful from "./Components/ColourFul";

function Main(){

    const [count,setcount]=useState(0);
    return(
        <>
        <h1 style={{ cursor:"pointer"}} onClick={()=>{setcount(count+1);}}>Counter</h1>
        <button style={{height:"60px",width:"100px",cursor:"pointer"}} onClick={()=>{setcount(count+1);}}>{count}</button>
        <Colourful/>
        </>
    );

    // const [colour,setcolour]=useState('white');

    // function colourChanger(e){
    //     let val=e.target.value;
    //     if(val==='default'){
    //         setcolour('white');
    //     }else{
    //         setcolour(val);
    //     }
    // }
    
    // // useEffect(Callback,[dependency]);
    // // useEffect(() => {
    // //     document.body.style.backgroundColor = colour;
    // // }, [colour]);

    // const arr=['pink','green','red','orange'];
    // return(
    //     <div className="parent" style={{backgroundColor:colour}}>
    //         {
    //             arr.map((colour,index)=>(
    //                 <button style={{backgroundColor:colour}} key={index} className="but" value={colour} onClick={colourChanger}>{colour}</button>
    //             ))
    //         }
    //         <button className="but" value="default" onClick={colourChanger}>reset</button>
    //     </div>
    // );


}

createRoot(document.getElementById('root')).render(<Main/>);