import { RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from "../actions/bookmark_actions";

const BookmarksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOOKMARKS:
            return action.bookmarks;
        case RECEIVE_BOOKMARK:
            return Object.assign({}, state, { [action.bookmark.id]: action.bookmark })
        case REMOVE_BOOKMARK:
            delete newState[action.bookmarkId];
            return newState;
        default:
            return state;
    }
}

export default BookmarksReducer;