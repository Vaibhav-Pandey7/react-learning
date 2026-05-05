// //create element through js

// //REACT OBJECT
// const React={
//     createElement: (tag,property,children)=>{
//         const element=document.createElement(tag);
//         for(let [key,val] of Object.entries(property)){
//             element.style[key]=val;
//         }

//         if(tag==='ul'){
//             for(let val of children){
//                 const li = document.createElement("li");
//                 li.textContent = val;
//                 element.append(li);
//             }
//         }else{
//             element.textContent=children;
//         }
//         return element;
//     }
// }

// //REACTDOM OBJECT
// const ReactDOM={
//     render: function(element,root){
//         root.append(element);
//     }
// }

// // const header1=document.createElement('h1');
// // header1.textContent="Hello Vaibhav";

// // header1.style.backgroundColor="blue";
// // header1.style.fontSize="30px";
// // header1.style.color="white";

// // //redundant
// // const header2=document.createElement('h1');
// // header2.textContent="Whats up";

// // header2.style.backgroundColor="black";
// // header2.style.fontSize="25px";
// // header2.style.color="white";

// const header1=React.createElement('h1',{"backgroundColor":"black","color":"white"},"Hello Vaibhav");
// const header2=React.createElement('h1',{"backgroundColor":"pink","color":"red"},"Hello Vaibhav");
// const ul=React.createElement('ul',{"backgroundColor":"pink","color":"red"},["mango","apple"]);

// const div=document.getElementById('root');
// ReactDOM.render(header1,div);
// ReactDOM.render(header2,div);
// ReactDOM.render(ul,div);
// // div.append(header1);
// // div.append(header2);
