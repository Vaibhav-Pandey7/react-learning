import { createRoot } from "react-dom/client";
import { useState,useContext } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import GlobalContext from "./GlobalContext";


function App() {
  const data=useContext(GlobalContext);
  const [counter, setcounter] = useState(0);
  return (
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
        <Increment count={counter} func={setcounter} />
      </div>
      <div>
        <Decrement count={counter} func={setcounter} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
