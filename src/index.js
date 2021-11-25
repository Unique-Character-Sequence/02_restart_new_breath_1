import React from 'react';
import './index.css';
import store from './Redux/redux_store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                state={store.getState()}
                store={store}
                // Теперь this для этих методов это только store
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);