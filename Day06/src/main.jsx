import { createRoot } from "react-dom/client";
import { useState } from "react";

function Counter(){
  const [count,setCount]=useState(0);//state change = value change 

  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
        <button onClick={()=>{setCount(count+1);}}>Incerement {count}</button>
        <button onClick={()=>{setCount(count-1);}}>Decrement {count}</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Counter/>);