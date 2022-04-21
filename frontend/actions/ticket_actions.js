import * as TicketAPIUtil from '../util/tickets_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const RECEIVE_TICKET_ERRORS = "RECEIVE_TICKET_ERRORS";
export const REMOVE_TICKET_ERRORS = "REMOVE_TICKET_ERRORS";

const receiveTickets = (tickets) => ({
    type: RECEIVE_TICKETS,
    tickets
});

const receiveTicket = (ticket) => ({
    type: RECEIVE_TICKET,
    ticket
});

const removeTicket = (ticket) => ({
    type: REMOVE_TICKET,
    ticketId: ticket.id
});

const receiveErrors = errors => ({
    type: RECEIVE_TICKET_ERRORS,
    errors
})

export const removeErrors = () => ({
    type: REMOVE_TICKET_ERRORS
})

export const requestTickets = () => dispatch => {
    return (
        TicketAPIUtil.fetchTickets().then(tickets => (dispatch(receiveTickets(tickets))))
    );
};

export const createTicket = (ticket) => dispatch => {
    return (
        TicketAPIUtil.createTicket(ticket).then(ticket => (
            dispatch(receiveTicket(ticket))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    );
};

export const updateTicket = (ticket) => dispatch => {
    return (
        TicketAPIUtil.updateTicket(ticket).then(ticket => (
            dispatch(receiveTicket(ticket)))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        )
    );
};

export const deleteTicket = (ticketId) => dispatch => {
    return (
        TicketAPIUtil.deleteTicket(ticketId).then(ticket => (dispatch(removeTicket(ticket))))
    );
};