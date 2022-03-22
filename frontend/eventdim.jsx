import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
// import { postUser, postSession, deleteSession } from './util/session_api_util'
import * as EventsAPI from './util/events_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        window.preloadedState = preloadedState;
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, root);

    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchEvents = EventsAPI.fetchEvents;
    window.fetchEvent = EventsAPI.fetchEvent;
    window.createEvent = EventsAPI.createEvent;
    window.updateEvent = EventsAPI.updateEvent;
    window.deleteEvent = EventsAPI.deleteEvent;

    // window.postUser = postUser;
    // window.postSession = postSession;
    // window.deleteSession = deleteSession;
});