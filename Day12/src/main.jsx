import { createRoot } from "react-dom/client";
import {BrowserRouter,Routes,Route,Link} from "react-router"
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
import Details from "./Components/Details";
import Zero from "./Components/Zero";
import Hello from "./Components/Hello";
import Hi from "./Components/Hi";
function App(){
    return (
        <BrowserRouter>
            <nav>
                {/* This is a library internally it is an anchor tag only */}
                <Link to="/" >Home</Link>
                <Link to="/Contact" >Contact</Link>
                <Link to="/DashBoard" >DashBoard</Link>
                <Link to="/Details" >Details</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/DashBoard" element={<Dashboard/>}></Route>
                <Route path="/Details" element={<Details/>}>
                    <Route index element={<Zero/>}></Route>
                    <Route path="Hello" element={<Hello/>}></Route>
                    <Route path="Hi" element={<Hi/>}></Route>
                </Route>
            </Routes>   
        </BrowserRouter>
    );
}


createRoot(document.getElementById('root')).render(<App/>);