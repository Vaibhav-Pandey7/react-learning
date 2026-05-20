# Practice Playground for React  

## If the user doing something causes a value to change, AND you want the user to see that change on the screen, you MUST use useState

# useCallback is a hook used when we have to reduce the function overhead or we can say "Use useCallback to freeze a function's memory address so it doesn't trigger unnecessary re-renders when passed to child components or used in useEffect dependency arrays."    

# useEffect hook is used when we have to delay things,use with DOM archietecture,Web API's or when some VALUE CHANGES
  
# React.memo is for Components (The HTML/JSX): Use it to wrap an entire child component so it flat-out refuses to re-render unless its incoming props actually change.
  
# useCallback is for Functions (The Logic): Use it to freeze a function's memory address in the parent component, specifically so you can pass it down as a prop without accidentally breaking the child's React.memo shield.

# Never use React.memo or useCallback until the parent is getting called too many times as using these increase the overhead due to the code they bring that helps us to use them 
  
# props is an object 

# always create diff components for different tasks

# we can use useEffect instead of usememo but that would increase the reneders as with useEffect we have to use a state variable to update in dom