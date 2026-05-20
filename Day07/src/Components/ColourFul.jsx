import { useState, useEffect } from "react"
import React from "react";

export default React.memo(function Colourful(){
    const [colour,setcolour]=useState('white');

    console.log('first');
    
    useEffect(()=>{console.log('UseEffect Exectued');document.body.style.backgroundColor=colour;},[colour]);

    // document.body.style.backgroundColor=colour;
    // console.log('BackGround Colour change');
    
    console.log('second');
    return (
        <>
            <h1>Background Colour Changer</h1>
            <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>{setcolour('red')}}>red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>{setcolour('blue')}}>blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>{setcolour('orange')}}>orange</button>
                <button style={{backgroundColor:"green"}} onClick={()=>{setcolour('green')}}>green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>{setcolour('pink')}}>pink</button>
            </div>
        </>
    );
})