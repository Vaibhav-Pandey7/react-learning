import { createRoot } from "react-dom/client";
import { useState,useContext } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import GlobalContext from "./GlobalContext";


function App() {
  const data=useContext(GlobalContext);
  const [counter, setcounter] = useState(0);
  return (
      <GlobalContext.Provider value={{count:counter,setcount:setcounter}}>
        {/* <GlobalContext.Provider value={{counter,setcounter}}/> this and the above one are same*/} 
        <div
          style={{
            textAlign: "center",
            gap: "10px",
          }}
        >
          <div>
            <h1
              onClick={() => {
                setcounter(counter + 1);
              }}
            >
              Parent Counter is: {counter}
            </h1>
            <h2 style={{color:"white"}}>{data}</h2>
          </div>
          <div>
            <Increment/>
          </div>
          <div>
            <Decrement/>
          </div>
        </div>
      </GlobalContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
