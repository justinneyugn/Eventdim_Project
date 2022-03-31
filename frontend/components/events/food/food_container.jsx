import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Food from './food'
import { requestEvents, deleteEvent, requestEvent } from '../../../actions/event_actions'

const mSTP = state => {
    return ({
        events: Object.values(state.entities.events),
        currentUser: state.session.currentUser
    });
};

const mDTP = dispatch => {
    return ({
        requestEvents: () => dispatch(requestEvents()),
        deleteEvent: eventId => dispatch(deleteEvent(eventId)),
        requestEvent: eventId => dispatch(requestEvent(eventId)),
        logout: () => dispatch(logout())
    });
};

export default connect(mSTP, mDTP)(Food);