import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import CoinCreate from "./Components/CoinCreate.jsx";

function App(){
    return (
        <>
        <Provider store={store}>
            <CoinCreate></CoinCreate>
        </Provider>
        </>
    );
}

createRoot(document.getElementById('root')).render(<App/>)