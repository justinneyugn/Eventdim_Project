import { RECEIVE_EVENT_ERRORS, RECEIVE_EVENT, REMOVE_EVENT_ERRORS } from "../actions/event_actions";

export default (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_EVENT_ERRORS:
            return action.errors;
        case REMOVE_EVENT_ERRORS: 
            return [];
        case RECEIVE_EVENT:
            return Object.assign({}, state, { [action.event.id]: action.event })
        default:
            return state;
    }
}