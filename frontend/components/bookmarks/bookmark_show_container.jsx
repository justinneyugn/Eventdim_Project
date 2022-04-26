import { connect } from 'react-redux';
import { requestBookmarks } from '../../actions/bookmark_actions';
import BookmarkShow from './bookmark_show';
import { logout } from '../../actions/session_actions';

const mSTP = state => {
    return ({
        bookmarks: Object.values(state.entities.bookmarks),
        currentUser: state.session.currentUser,
        events: state.entities.events
    });
};

const mDTP = dispatch => {
    return ({
        requestBookmarks: () => dispatch(requestBookmarks()),
        logout: () => dispatch(logout())
    });
};

export default connect(mSTP, mDTP)(BookmarkShow);
