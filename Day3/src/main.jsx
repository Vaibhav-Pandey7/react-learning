import ReactDOM from 'react-dom/client';

const div=document.getElementById('root');

//this is a react element
//<></> is called a fragment

const name="Vaibhav";
const obj={
  age:23,
  salary:67
};
const child=(
  <>
    <h1 id="first" className="two" style={{backgroundColor:"pink",color:"red"}}>I am {name}</h1>
    <h1 id="second" style={{backgroundColor:"pink",color:"red"}}>I am practicing React {obj.age}</h1>
  </>
);

ReactDOM.createRoot(div).render(child);