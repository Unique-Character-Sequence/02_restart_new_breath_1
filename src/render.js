import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updatePostInput} from "./Redux/state";

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updatePostInput={updatePostInput}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}