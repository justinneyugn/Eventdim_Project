import { connect, withRouter } from 'react-redux';
import EventIndex from './event_index';
import { requestEvents, deleteEvent, requestEvent } from '../../actions/event_actions';

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
        requestEvent: eventId => dispatch(requestEvent(eventId))
    });
};

export default connect(mSTP, mDTP)(EventIndex);