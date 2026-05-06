import React from 'react';
import ReactDOM from 'react-dom/client';

const div=document.getElementById('root');
const child=(
  <div>
    <h1 id="first" style={{backgroundColor:"pink",color:"red"}}>I am Vaibhav Pandey</h1>
    <h1 id="second" style={{backgroundColor:"pink",color:"red"}}>I am practicing React</h1>
  </div>
);

ReactDOM.createRoot(div).render(child);