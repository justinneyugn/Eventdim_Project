import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.requestEvent(this.props.event.id);
    }

    render() {
        if (!this.props.event) return null;
        const user = this.props.currentUser ? (
            <div>
                <div className='btn'>{this.props.currentUser.email}</div>
            </div>
        ) : (
            <div></div>
        );
        const display = this.props.currentUser ? (
            <div>
                <button className="btn create form-logout" onClick={this.props.logout}>Log Out</button>
            </div>
        ) : (
            <div>
                <Link className="btn" to="/signin">Sign In</Link>
            </div>
        );
        return (
            <div className='show-container'>
                <header className="nav-bar">
                    <Link to='/' className='website_name'>eventdim</Link>
                    <nav>
                        <ul className="nav_links">
                            <li>{user}</li>
                            <li><Link className="btn create" to='/new'>Create an event</Link></li>
                            <li>{display}</li>
                        </ul>
                    </nav>
                </header>
                <div className='show-page'>
                    <div className='show-main-info'>
                        <div className='show-top-portion'>
                            <div className='show-picture'>
                                <img src={this.props.event.photoUrl} width="573.98" height="290"></img>
                            </div>
                            <div className='show-top-right'>
                                <div className='show-title'>
                                    <h3 className='title'>{this.props.event.title}</h3>
                                </div>
                                <div className='show-price'>
                                    <h4 className='price'>${this.props.event.ticket_price}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='show-bottom-portion'>
                            <div className='show-information'>
                                <p>{this.props.event.details}</p>
                            </div>
                            <div className='show-date-location'>
                                <div className='show-date'>
                                    <p className='date-title'>Date</p>
                                    <p className='date'>{this.props.event.date}</p>
                                </div>
                                <div className='show-place'>
                                    <p className='show-location'>Location</p>
                                    <p className='place'>{this.props.event.location}</p>
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