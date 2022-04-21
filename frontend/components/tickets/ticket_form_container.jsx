import React from 'react';
import { connect } from 'react-redux';
import { createTicket } from '../../actions/ticket_actions';
import TicketForm from './ticket_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => {
    return ({
        ticket: { amount: 0 },
        event: state.entities.events,
        currentUser: state.session.currentUser,
        errors: state.errors.ticket
    })
}

const mDTP = dispatch => {
    return ({
        submitTicket: ticket => dispatch(createTicket(ticket)),
        closeModal: () => dispatch(closeModal())
    });
};

export default withRouter(connect(mSTP, mDTP)(TicketForm));