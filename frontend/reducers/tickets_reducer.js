import { RECEIVE_TICKETS, RECEIVE_TICKET, REMOVE_TICKET } from "../actions/ticket_actions";

const TicketsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TICKETS:
            return action.tickets;
        case RECEIVE_TICKET:
            return Object.assign({}, state, { [action.ticket.id]: action.ticket })
        case REMOVE_TICKET:
            delete newState[action.ticketId];
            return newState;
        default:
            return state;
    }
}

export default TicketsReducer;