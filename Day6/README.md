```import { createRoot } from "react-dom/client";```

```function Counter(){```
```  let count=0;```

```  return (```
```    <div className="first">```
```      <h1>Count is: {count}</h1>```
```    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>```
```        <button onClick={()=>{count++;}}>Incerement</button>```
        ```<button onClick={()=>{count--;}}>Decrement</button>```
     ``` </div>```
    ```</div>```
  ```);```
```}```

```createRoot(document.getElementById('root')).render(<Counter/>);```
   
   this code just manipulate the count variable but donot change the dom 

as in vanilla js  
```let currentCount = 0;

// Grab the HTML elements
const button = document.getElementById("upButton");
const scoreDisplay = document.getElementById("score");

// Attach the listener
button.addEventListener("click", () => {
  currentCount++; // Do the math behind the scenes
  scoreDisplay.innerText = currentCount; // Update the screen!
});```   
   
but here react is very effecient in maupulating dom so instead of this we give react all the control to maulpulate dom   
  
   