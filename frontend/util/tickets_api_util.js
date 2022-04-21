export const fetchTickets = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/tickets`
    })
};

export const createTicket = (ticket) =>{ 
    return $.ajax({
        method: `POST`,
        url: `/api/tickets`,
        data: { ticket }
    })
};

export const updateTicket = (ticket) => {
    return $.ajax({
        method: `PATCH`,
        url: `/api/tickets/${ticket.id}`,
        data: { ticket }
    })
};

export const deleteTicket = (ticketId) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/tickets/${ticketId}`
    })
};