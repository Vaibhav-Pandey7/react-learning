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
    <h1 id="second" money={23} style={{backgroundColor:"pink",color:"red"}}>I am practicing React {obj.age}</h1>
  </>
);

//React Component
//->function based component


function Wrapper(Function1,Function2){
  return (
    <>
      <Function1></Function1>
      <Function2></Function2>
    </>
  );
}

function Greet(){
  return <h1>how are u</h1>
}

const Meet=()=>{
  return <h1>Whats up man??</h1>
}

// const functioncomponent=Greet();

// ReactDOM.createRoot(div).render(child);
ReactDOM.createRoot(div).render(Wrapper(Greet,Meet));