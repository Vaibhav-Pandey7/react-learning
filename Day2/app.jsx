import React from "react";
import {createRoot} from "react-dom/client"
// const element=React.createElement("h1",{id:"first",className:"vaibhav",style:{backgroundColor:"pink",fontSize:"30px"}},"i am vaibhav pandey");
// const element2=React.createElement("h1",{id:"second",className:"vaibhav",style:{backgroundColor:"red",fontSize:"30px"}},"content");
const div=document.getElementById('root');
const div1=(
    <div>
        <h1 id="first" className="vaibhav" style={{ backgroundColor: "pink", fontSize: "30px" }}>i am vaibhav pandey</h1>
        <h1 id="second" className="vaibhav" style={{ backgroundColor: "red", fontSize: "30px" }}>content</h1>
    </div>
);

createRoot(div).render(div1);
// root.render(element);
// root.render(element2);  
// root.render(div1)