import { connect } from 'react-redux';
import { requestTickets } from '../../actions/ticket_actions';
import TicketShow from './ticket_show';
import { logout } from '../../actions/session_actions';

const mSTP = state => {
    return ({
        tickets: Object.values(state.entities.tickets),
        currentUser: state.session.currentUser,
        events: state.entities.events
    });
};

const mDTP = dispatch => {
    return ({
        requestTickets: () => dispatch(requestTickets()),
        logout: () => dispatch(logout()),
    });
};

export default connect(mSTP, mDTP)(TicketShow);