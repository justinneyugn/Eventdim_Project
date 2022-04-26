export const fetchBookmarks = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/bookmarks`
    })
};

export const createBookmark = (bookmark) =>{ 
    return $.ajax({
        method: `POST`,
        url: `/api/bookmarks`,
        data: { bookmark }
    })
};


export const deleteBookmark = (bookmarkId) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/tickets/${bookmarkId}`
    })
};