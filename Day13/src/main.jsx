import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import Github from "./Components/Github";

function App() {
  return (
    <BrowserRouter>
      <NavigationMenu /> 
      
      <Routes>
        <Route path="/github/:name" element={<Github />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavigationMenu() {
  const navigate = useNavigate();
//   console.log(typeof navigate);

  const handleSelect = (e) => {
    const selectedUser = e.target.value; 
    
    if (selectedUser) {
      navigate(`/github/${selectedUser}`);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <select defaultValue="Select Value" onChange={handleSelect}>
        <option value="" disabled>Select a GitHub Profile...</option>
        <option value="Vaibhav-Pandey7">Vaibhav Pandey</option>
        <option value="bcalloway">bcalloway</option>
        <option value="dhainlin">dhainlin</option>
      </select>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);