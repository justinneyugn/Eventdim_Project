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
                    <li key={`bookmark-${i}`} className="event-item-container">
                        <Link className="event-item" to={`/events/${eventId}`}>
                            <div className='event-picture'>
                                <img src={`${event.photoUrl}`} width="370" height="178.98"></img>
                            </div>
                            <div className="event-item-bottom-container bookmark-bottom">
                                <div className="event-title">
                                    <h3>{event.title}</h3>
                                </div>
                                <div className="event-date">
                                    <p>{event.date}</p>
                                </div>
                                <div className="event-location">
                                    <p>{event.location}</p>
                                </div>
                                <div className="event-ticket-price">
                                    <p>Starts at ${event.ticket_price}</p>
                                </div>
                                <div className="event-edit-delete">
                                    <button className="ticket-btn" onClick={() => this.props.deleteBookmark(bookmark.id)}>Unlike</button>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            })
        }
    }

    render() {
        if (!this.props.bookmarks) return null;
        return (
            <div>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout} />
                <div className='ticket-show'>
                    <div id="ticket-header">Likes</div>
                    <ul className="reports-grid">{this.showUserBookmarks()}</ul>
                </div>
            </div>
        )
    }
}

export default BookmarkShow;