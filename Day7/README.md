# The state funciton don't calls itself or anything that was just for visualization
  
## State updates are Asynchronous i.e. React does not instantly stop the function, change the screen to white, and restart the component.  

Capitalizing a function is just a signal to the JSX compiler.

Using <Buttons /> tells the compiler to use React.createElement(), which officially registers the component with React's memory engine.

Using Buttons() is just a raw JavaScript call that skips the registration process, causing useState to panic because it has no memory slot assigned to it.  

## by the use opf buttons esbuild doesnot convert the things inside the component to a react element andn when this happens react reaches the useState decalaration but since it now under a react element it doesnt know about that hence giving error 