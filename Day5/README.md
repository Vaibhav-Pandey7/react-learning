Module is a unit of code that is reused multiple times for ex in the myntra clone card is a module   

if we have a variable with const let var   
we cannot export like this  
```export deafult const arr=[];```   
we have to do it like  
```const arr=[];```
```export default arr;```    
  
also in one file there can be only 1 deault export  
and if we want others we do named export  
if we have to change the name of an import we can do it like  
```import Header as head from "./xyz";```  
