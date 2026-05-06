// const element=React.createElement("h1",{id:"first",className:"vaibhav",style:{backgroundColor:"pink",fontSize:"30px"}},"i am vaibhav pandey");
// const element2=React.createElement("h1",{id:"second",className:"vaibhav",style:{backgroundColor:"red",fontSize:"30px"}},"content");
const element=<h1 id="first" className="vaibhav" style={{ backgroundColor: "pink", fontSize: "30px" }}>i am vaibhav pandey</h1>
const element2 = <h1 id="second" className="vaibhav" style={{ backgroundColor: "red", fontSize: "30px" }}>content</h1>

const div=document.getElementById('root');
const div1=React.createElement('div',{},[element,element2]);

const root=ReactDOM.createRoot(div);
root.render(element);
root.render(element2);  
root.render(div1);