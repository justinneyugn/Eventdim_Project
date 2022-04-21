import { RECEIVE_TICKET_ERRORS, RECEIVE_TICKET, REMOVE_TICKET_ERRORS } from "../actions/ticket_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TICKET_ERRORS:
            return action.errors;
        case REMOVE_TICKET_ERRORS: 
            return [];
        case RECEIVE_TICKET:
            return Object.assign({}, state, { [action.ticket.id]: action.ticket })
        default:
            return state;
    }
}