import { createRoot } from "react-dom/client";
import {BrowserRouter,Routes,Route,Link} from "react-router"
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
function App(){
    return (
        <BrowserRouter>
            <nav>
                {/* This is a library internally it is an anchor tag only */}
                <Link to="/" >Home</Link>
                <Link to="/Contact" >Contact</Link>
                <Link to="/DashBoard" >DashBoard</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/DashBoard" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}


createRoot(document.getElementById('root')).render(<App/>);