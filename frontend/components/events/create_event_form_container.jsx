import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import { logout } from '../../actions/session_actions';
import EventForm from './event_form';

const mSTP = state => {
    return ({
        event: {title: '', details: '', location: '', ticket_price: 0.00, date: '', photoUrl: null},
        currentUser: state.session.currentUser,
        formType: 'Create an event'
    });
};

const mDTP = dispatch => {
    return ({
        submitEvent: event => dispatch(createEvent(event)),
        logout: () => dispatch(logout())
    });
};

export default connect(mSTP, mDTP)(EventForm);