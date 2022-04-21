import { connect } from 'react-redux';
import { createTicket } from '../../actions/ticket_actions';
import TicketForm from './ticket_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps, errors) => {
    return ({
        ticket: {amount: 0},
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.session.currentUser,
        errors: errors.ticket
    })
}

const mDTP = dispatch => {
    return ({
        submitTicket: ticket => dispatch(createTicket(ticket)),
        otherForm: (
            <button onClick={() => dispatch(openModal('ticket'))}>
                Purchase Ticket
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mSTP, mDTP)(TicketForm);