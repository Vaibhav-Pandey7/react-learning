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
