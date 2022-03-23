import { connect } from 'react-redux';
import EventIndex from './event_index';
import { requestEvents, deleteEvent } from '../../actions/event_actions';

const mSTP = state => {
    return ({
        events: Object.values(state.entities.events)
    });
};

const mDTP = dispatch => {
    return ({
        requestEvents: () => dispatch(requestEvents()),
        deleteEvent: eventId => dispatch(deleteEvent(eventId))
    });
};

export default connect(mSTP, mDTP)(EventIndex);