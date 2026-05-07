import { createRoot } from 'react-dom/client'

const element1=<h1>Hello Everyone</h1>

function greet() {
  return <h2>Hello Bhai ji</h2>;
}

createRoot(document.getElementById('root')).render(element1);