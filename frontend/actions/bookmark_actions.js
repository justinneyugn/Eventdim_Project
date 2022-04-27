import * as BookmarkAPIUtil from '../util/bookmarks_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveBookmarks = (bookmarks) => ({
    type: RECEIVE_BOOKMARKS,
    bookmarks
});

const receiveBookmark = (bookmark) => ({
    type: RECEIVE_BOOKMARK,
    bookmark
});

const removeBookmark = (bookmark) => ({
    type: REMOVE_BOOKMARK,
    bookmarkId: bookmark.id
});

export const requestBookmarks = () => dispatch => {
    return (
        BookmarkAPIUtil.fetchBookmarks().then(bookmarks => (dispatch(receiveBookmarks(bookmarks))))
    );
};

export const requestBookmark = (bookmarkId) => dispatch => {
    return (
        BookmarkAPIUtil.fetchBookmark(bookmarkId).then(bookmark => (dispatch(receiveBookmark(bookmark))))
    );
};

export const createBookmark = (bookmark) => dispatch => {
    return (
        BookmarkAPIUtil.createBookmark(bookmark).then(bookmark => (
            dispatch(receiveBookmark(bookmark))
        ))
    );
};

export const deleteBookmark = (bookmarkId) => dispatch => {
    return (
        BookmarkAPIUtil.deleteBookmark(bookmarkId).then(bookmark => (dispatch(removeBookmark(bookmark))))
    );
};