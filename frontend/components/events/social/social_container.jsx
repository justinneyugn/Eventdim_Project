import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Social from './social'
import { requestEvents, deleteEvent, requestEvent } from '../../../actions/event_actions'
import { requestBookmarks, requestBookmark, createBookmark } from '../../../actions/bookmark_actions';

const mSTP = state => {
    return ({
        events: Object.values(state.entities.events),
        currentUser: state.session.currentUser,
        bookmarks: Object.values(state.entities.bookmarks)
    });
};

const mDTP = dispatch => {
    return ({
        requestEvents: () => dispatch(requestEvents()),
        deleteEvent: eventId => dispatch(deleteEvent(eventId)),
        requestEvent: eventId => dispatch(requestEvent(eventId)),
        logout: () => dispatch(logout()),
        requestBookmarks: () => dispatch(requestBookmarks()),
        createBookmark: bookmark => dispatch(createBookmark(bookmark)),
        requestBookmark: bookmarkId => dispatch(requestBookmark(bookmarkId))
    });
};

export default connect(mSTP, mDTP)(Social);