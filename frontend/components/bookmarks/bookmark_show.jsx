import React from 'react';
import NavBar from '../nav_bar/nav_bar';

class BookmarkShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBookmarks();
    }

    showUserBookmarks() {
        let userBookmarks = [];
        for (let bookmark of this.props.bookmarks) {
            if (bookmark.bookmarker_id === this.props.currentUser.id) {
                userBookmarks.push(bookmark);
            }
        }
        if (userBookmarks.length === 0) {
            return (
                <div> Add events, share with friends!</div>
            )
        } else {
            return userBookmarks.map((bookmark, i) => (
                <div>
                    
                </div>
            ))
        }
    }
}

export default BookmarkShow;