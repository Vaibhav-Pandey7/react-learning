//create element through js
const header1=document.createElement('h1');
header1.textContent="Hello Vaibhav";

header1.style.backgroundColor="blue";
header1.style.fontSize="30px";
header1.style.color="white";

//redundant
const header2=document.createElement('h1');
header2.textContent="Whats up";

header2.style.backgroundColor="black";
header2.style.fontSize="25px";
header2.style.color="white";

const div=document.getElementById('root');
div.append(header1);
div.append(header2);
