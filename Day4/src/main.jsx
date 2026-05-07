import { createRoot } from 'react-dom/client'

const element1=<h1>Hello Everyone</h1>

const array=[20,40,"Rohit",10];

function greet() {
  return <h2>Hello Bhai ji {array}</h2>;
}
function Greet(props) {
  return <h2>Hello Bhai ji {props.name}</h2>;
}
//we can suse array in jsx 

// this is jsx rule that first letter is capital no react

createRoot(document.getElementById('root')).render(<Greet name="Vaibhav Pandey" age="20"/>);