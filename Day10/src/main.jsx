import { useCallback, useState } from "react";
import { createRoot } from "react-dom/client";

function Counter(){
  const [count, setcount] = useState(0);
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "pink",
        textAlign: "center",
      }}
    >
      <h1>Counter Val:- {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};



function Fibonacci(){

  const [val, setval] = useState("");
  const [display, setdisplay] = useState("");

  const fib=useCallback((v)=>{
    let prev=0,curr=1,temp=0;
    let ans=0;
    if(v==1){
      ans=prev;
    }else{
      for(let i=1;i<v;i++){
        temp=prev;
        prev=curr;
        curr+=temp;
      }
      ans=curr;
    }
    setdisplay(ans);
  },[]);

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "aqua",
        textAlign: "center",
      }}
    >
      <h1>Fibonacci Number:-{display}</h1>
      <input
        type="number"
        value={val}
        placeholder="Enter Num"
        onChange={(e) => {
          setval(e.target.value);
        }}
      />
      <button onClick={()=>{fib(val);}}>Get Fib</button>
    </div>
  );
};

function Main() {
  return (
    <>
      <Counter />
      <Fibonacci />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
