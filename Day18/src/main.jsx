import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [arr, setArr] = useState(["JS", "CPP", "TS"]);
  const [press, setpress] = useState([0, 0, 0]);
  const [lang, setlang] = useState("");

  return (
    <>
      {arr.map((val, index) => {
        return (
          <div key={index}>
            <h1>Count for {val} is:{press[index]}</h1>
            <button
              onClick={() => {
                let temp = [...press];
                temp[index] += 1;
                setpress(temp);
              }}
            >
              Count
            </button>
          </div>
        );
      })}
      <input
        type="text"
        value={lang}
        onChange={(e) => {
          setlang(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (lang !== "" && !arr.includes(lang)) {
            setArr([...arr, lang]);
            setpress([...press, 0]);
          }
          setlang("");
        }}
      >
        Add Language
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);