![alt text](./images/image.png)
  
# State UpLifting-
>You take the useState out of the child component, and you move it UP into the closest common Parent component.
  
![alt text](./images/image-1.png)
  
if we use state uplifting if we have multiple children but only the lowest one uses that prop even if the others are not using that state variable a change in that will lead to rerendering of all the child even with the use of React.memo()
![alt text](./images/image2.png)
  
# So to prevent that rerendernig we make a global file and use the useContext hook along with createContext
  
## The variable you create using createContext() MUST start with a Capital Letter (PascalCase).

>❌ Bad: const globalContext = createContext();

>✅ Good: const GlobalContext = createContext();

  
## to be able to get the updated value we have to wrap in the GlobalContext.Provider

  
### 💡 Why `useContext` instead of a standard `.js` file?

>If we just export and update a variable from a normal JavaScript file, the value changes in memory, but the screen will not update because React doesn't track standard variables. This puts us right back where we started before learning `useState`. 

>To fix this, we use `useContext`. It acts as a global trigger that connects our data directly to React's engine. It tells React: "Provide this state to any child wrapped inside the `<GlobalContext.Provider>`, and whenever this value changes, automatically re-render those specific children so the screen updates."