const element=React.createElement("h1",{},"i am vaibhav pandey");

const div=document.getElementById('root');

//old deprecated version(till react 17)
// ReactDOM.render(element,div); 

//new from react 18
const root=ReactDOM.createRoot(div);
root.render(element);