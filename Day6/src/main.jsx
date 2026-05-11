import { createRoot } from "react-dom/client";

function Counter(){
  let count=0;

  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
        <button onClick={()=>{count++;}}>Incerement</button>
        <button onClick={()=>{count--;}}>Decrement</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Counter/>);