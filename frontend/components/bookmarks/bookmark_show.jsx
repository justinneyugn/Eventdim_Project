import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { Link } from 'react-router-dom';


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
            return userBookmarks.map((bookmark, i) => {
                let eventId = bookmark.event_id;
                let event = this.props.events[eventId];
                return (
                    <div key={`bookmark-${i}`}>
                        <Link className="event-item" to={`/events/${eventId}`}>{event.title}</Link>
                        <h3>{event.date}</h3>
                        <h3>{event.location}</h3>
                        <h3>Starts at ${event.ticket_price}</h3>
                        <img src={`${event.photoUrl}`} width="370" height="178.98"></img>
                        <button className="ticket-btn" onClick={() => this.props.deleteBookmark(bookmark.id)}>Unlike</button>
                    </div>
            )})
        }
    }

    render() {
        if (!this.props.bookmarks) return null;
        return (
            <div>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
                <div className='ticket-show'>
                    <div id="ticket-header">Likes</div>
                    <div className="reports-grid">{this.showUserBookmarks()}</div>
                </div>
            </div>
        )
    }
}

export default BookmarkShow;