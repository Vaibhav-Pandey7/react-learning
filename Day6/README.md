```
import { createRoot } from "react-dom/client";

function Counter(){
  let count=0;

  return (
    <div className="first">
      <h1>Count is: {count}</h1>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
       <button onClick={()=>{count++;}}>Incerement</button>
        <button onClick={()=>{count--;}}>Decrement</button>
      </div>
    </div>
  );
}
```

createRoot(document.getElementById('root')).render(<Counter/>);
   
   this code just manipulate the count variable but donot change the dom 

as in vanilla js  
```
let currentCount = 0;

// Grab the HTML elements
const button = document.getElementById("upButton");
const scoreDisplay = document.getElementById("score");

// Attach the listener
button.addEventListener("click", () => {
  currentCount++; // Do the math behind the scenes
  scoreDisplay.innerText = currentCount; // Update the screen!
});
```   
   
but here react is very effecient in maupulating dom so instead of this we give react all the control to maulpulate dom   

Hooks are just special function  
   
## Rule 1: Only call them at the Top Level
You can never put a Hook inside an if statement, a for loop, or a nested function. They must always sit at the very top of your component, right under the function MyComponent() line.

Why? React relies on the exact order that Hooks are called to keep track of its memory. If you put a Hook in an if statement, it might be skipped, and React will completely lose its mind and mix up your variables.

## Rule 2: Only call them in React Functions
You cannot use useState inside a standard Vanilla JS file, and you cannot use it inside a normal helper function like function calculateTax().

Why? Because normal functions aren't connected to the React Virtual DOM. Hooks only work inside capitalized React Components (like <Body /> or <Card />).


# The React Golden Rule: State is Read-Only (Immutable)
In React, you are strictly forbidden from directly modifying a state variable. You must treat state as read-only. You update the screen by passing a brand-new value into the set function.

Why? (The "Polaroid" Concept)
React updates the UI by playing "Spot the Difference" between the old state and the new state.

If you alter the variable directly (count++), you are just modifying the old snapshot. React checks the data, sees no difference between the old and new references, and completely ignores the update (the screen freezes).

If you use the setter function (setCount(count + 1)), you hand React a brand-new snapshot to compare, which instantly triggers a UI re-render.

### Always use const when defining Hooks. It forces JavaScript to throw an error if you ever accidentally try to mutate the variable directly!

## The Wrong Way (Direct Mutation)
```
import { useState } from "react";

function Counter() {
  // BAD: Using 'let' allows you to accidentally change the variable
  let [count, setCount] = useState(0); 

  return (
    // BAD: 'count++' secretly changes the variable behind React's back!
    <button onClick={() => { count++; setCount(count); }}>
      Increment {count}
    </button>
  );
}
```

## The Right Way (Industry Standard)
```
import { useState } from "react";

function Counter() {
  // GOOD: Using 'const' permanently protects the variable from direct changes
  const [count, setCount] = useState(0); 

  return (
    // GOOD: Leave 'count' alone, and pass the new math directly to the setter!
    <button onClick={() => { setCount(count + 1); }}>
      Increment {count}
    </button>
  );
}
```
