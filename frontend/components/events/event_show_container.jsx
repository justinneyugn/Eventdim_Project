import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    return ({
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.session.currentUser
    });
};

const mDTP = dispatch => {
    return ({
        requestEvent: eventId => dispatch(requestEvent(eventId)),
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    });
};

export default connect(mSTP, mDTP)(EventShow);