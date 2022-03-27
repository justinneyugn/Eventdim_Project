import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = state => {
    return ({
        event: {title: '', details: '', location: '', ticket_price: 0.00},
        currentUser: state.session.currentUser,
        formType: 'Create an event'
    });
};

const mDTP = dispatch => {
    return ({
        submitEvent: event => dispatch(createEvent(event))
    });
};

export default connect(mSTP, mDTP)(EventForm);