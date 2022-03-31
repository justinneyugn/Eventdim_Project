import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import { logout } from '../../actions/session_actions';
import EventForm from './event_form';

class EditEventForm extends React.Component {

    componentDidMount(){
        this.props.requestEvent(this.props.event.id)
    }
    
    render () {
        debugger
        const { event, formType, submitEvent, history, currentUser, photoUrl, logout } = this.props;

        if (!event) return null;
        return ( 
            <EventForm
                event={event}
                formType={formType}
                submitEvent={submitEvent}
                currentUser={currentUser}
                photoUrl={photoUrl}
                history={history}
                logout={logout} />
        );
    }
}

const mSTP = (state, ownProps) => {
    return ({
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.session.currentUser,
        formType: 'Edit'
    });
};

const mDTP = dispatch => {
    return ({
        submitEvent: event => dispatch(updateEvent(event)),
        requestEvent: eventId => dispatch(requestEvent(eventId)),
        logout: () => dispatch(logout())
    });
};

export default connect(mSTP, mDTP)(EditEventForm);