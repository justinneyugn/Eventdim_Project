import * as EventAPIUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const REMOVE_EVENT_ERRORS = "REMOVE_EVENT_ERRORS";

const receiveEvents = (events) => ({
    type: RECEIVE_EVENTS,
    events
});

const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
});

const removeEvent = (event) => ({
    type: REMOVE_EVENT,
    eventId: event.id
});

const receiveErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const removeErrors = () => ({
    type: REMOVE_EVENT_ERRORS
})

export const requestEvents = () => dispatch => {
    return (
        EventAPIUtil.fetchEvents().then(events => (dispatch(receiveEvents(events))))
    );
};

export const requestEvent = (eventId) => dispatch => {
    return (
        EventAPIUtil.fetchEvent(eventId).then(event => (dispatch(receiveEvent(event))))
    );
};

export const createEvent = (event) => dispatch => {
    return (
        EventAPIUtil.createEvent(event).then(event => (
            dispatch(receiveEvent(event))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    );
};

export const updateEvent = (event) => dispatch => {
    return (
        EventAPIUtil.updateEvent(event).then(event => (
            dispatch(receiveEvent(event)))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        )
    );
};

export const deleteEvent = (eventId) => dispatch => {
    return (
        EventAPIUtil.deleteEvent(eventId).then(event => (dispatch(removeEvent(event))))
    );
};