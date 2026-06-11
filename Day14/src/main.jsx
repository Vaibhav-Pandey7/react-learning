import {createRoot} from "react-dom/client";
import Counting from "./Components/Counting";
import { Provider } from "react-redux";
import store from "./store/Store";

function App(){
    return (
        <>
        <Provider store={store}>
            <Counting></Counting>
        </Provider>
        </>
    );
}

createRoot(document.getElementById('root')).render(<App/>)