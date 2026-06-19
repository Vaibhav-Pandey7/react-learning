# The Store object created using  
```
const store=configureStore({
    reducer:{
        slice1:reducerSlice1,
    }
})
```
![alt text](./src/assets/image.png)  
1. here subsribe means when we use useSelector hook from the react-redux library ex.
`const count=useSelector((state)=>state.slice1.count)` 
2. dispatch is basically the function we use to perform actions `const dispatch=useDispatch();`  
### When you click the button:

>`Increment` is an Action Creator function. When you call it by writing `Increment()`, it does absolutely no math.It just executes and returns a tiny **Object**: `{ type: 'slice1/Increment' }`.

>`dispatch()` takes that object like a mail carrier and delivers it to the global Redux Store.

>The Redux Store looks at the object, sees the type is "slice1/Increment", and says, "Ah! I need to run the slice1 reducer logic for Increment!"

>The Store runs the reducer in the background securely, updates the state, and tells useSelector to update your UI.