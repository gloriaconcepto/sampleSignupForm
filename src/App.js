import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Router/Router";
// import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ToastContainer />
                <div className="body">
                    <Routes />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
