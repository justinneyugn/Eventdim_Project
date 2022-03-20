import React from "react";
import ReactDOM from "react-dom";
import { postUser, postSession, deleteSession } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<h1>Welcome to Eventdim!</h1>, root);

    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});