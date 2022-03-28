import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestEvent(this.props.event.id);
    }

    render() {
        if (!this.props.event) return null;
        const display = this.props.currentUser ? (
            <div>
                <p>Hello, {this.props.currentUser.email}</p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        ) : (
            <div>
                <Link className="btn" to="/signin">Sign In</Link>
            </div>
        );
        return (
            <div className='event-container'>
                <header className="nav-bar">
                    <Link to='/' className='website_name'>eventdim</Link>
                    <nav>
                        <ul className="nav_links">
                            <li><Link className="btn create" to='/new'>Create an event</Link></li>
                            <li>{display}</li>
                        </ul>
                    </nav>
                </header>
                <div className='event-show-page'>
                    <div className='event-main-info'>
                        <div className='event-top-portion'>
                            <div className='event-picture'>
                                <img src={this.props.event.photoUrl}></img>
                            </div>
                            <div className='event-top-right'>
                                <div className='event-title'>
                                    <p>{this.props.event.title}</p>
                                </div>
                                <div className='event-price'>
                                    <h3>${this.props.event.ticket_price}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='event-bottom-portion'>
                            <div className='event-information'>
                                <p>{this.props.event.details}</p>
                            </div>
                            <div className='event-date-location'>
                                <div className='event-date'>
                                    <h3>Date</h3>
                                    <h3 className='date'>{this.props.event.date}</h3>
                                </div>
                                <div className='event-place'>
                                    <h3>Location</h3>
                                    <h3 className='place'>{this.props.event.location}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventShow;