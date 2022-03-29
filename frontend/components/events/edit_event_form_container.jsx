import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';
// import {withRouter} from 'react-router-dom'

class EditEventForm extends React.Component {

    componentDidMount(){
        this.props.requestEvent(this.props.event.id)
    }
    
    render () {
        const { event, formType, submitEvent, history, currentUser, photoUrl } = this.props;

        if (!event) return null;
        return (
            <EventForm
                event={event}
                formType={formType}
                submitEvent={submitEvent}
                currentUser={currentUser}
                photoUrl={photoUrl}
                history={history} />
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
        requestEvent: eventId => dispatch(requestEvent(eventId))
    });
};

export default connect(mSTP, mDTP)(EditEventForm);