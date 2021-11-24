import React from 'react';
import './index.css';
import store from './Redux/redux_store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={state}
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                    // Теперь this для этих методов это только store
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender(store.getState());


store.subscribe(() => {
    // Данная переданная функция будет вызываться
    let state = store.getState()
    rerender(state)
});