import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestEvents();
    }

    render(){
        debugger
        let events = this.props.events.map( (event, idx) => {
            return (
                <EventIndexItem
                    event={event}
                    deleteEvent={this.props.deleteEvent}
                    currentUser={this.props.currentUser}
                    requestEvent={this.props.requestEvent}
                    bookmarks={this.props.bookmarks}
                    requestBookmarks={this.props.requestBookmarks}
                    createBookmark={this.props.createBookmark}
                    requestBookmark={this.props.requestBookmark}
                    history={this.props.history}
                    key={`event-${idx}`}
                />
            )
        })
        return (
            <div className="home-container">
                <section className='home-picture'>
                    <img src="https://eventdim-seeds.s3.us-west-1.amazonaws.com/splash.png"></img>
                </section>
                <section className="home-bottom-half-container">
                    <div className='home-bottom-half'>
                        <div className='home-covid-container'>
                            <div className='home-covid-item'>
                                <div className='home-covid-top'>
                                    Re-open confidently with Eventdim's COVID-19 Safety Playbook
                                </div>
                                <span className='home-covid-bottom'>
                                    We partnered with risk management and health experts to empower
                                    event creators to thoughtfully consider potential safety and security
                                    risks at your event.
                                </span>
                            </div>
                        </div>
                        <div className='category-links-container'>
                            <div className='category-links'>
                                <div className='first-link'><Link className='single-link' to='/'>All</Link></div>
                                <div className='other-link'><Link className='single-link' to='/food'>Food/Drinks</Link></div>
                                <div className='other-link'><Link className='single-link' to='/social'>Social</Link></div>
                                <div className='other-link'><Link className='single-link' to='/entertainment'>Entertainment</Link></div>
                                <div className='other-link'><Link className='single-link' to='/other'>Other</Link></div>
                            </div>
                        </div>
                        <div className='home-browse-section'>
                            <div className='home-location-container'>
                                <div className='home-location-item'>
                                    <div className='home-popular-in'>
                                        Events in 
                                    </div>
                                    <div className='home-sacramento'>
                                        Sacramento
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <ul className='reports-grid'>
                            {events}
                        </ul>
                    </div>
                </section>
                <section className='home-about-me'>
                    <div className='about-me'>
                        <a className='linked-in' href='https://www.linkedin.com/in/justin-nguyen-b851461b2/' target="_blank">
                            <img src='https://eventdim-seeds.s3.us-west-1.amazonaws.com/linkedin_icon.png' width='30' height='30'></img>
                        </a>
                        <a className='github' href='https://github.com/justinneyugn' target="_blank">
                            <img src='https://eventdim-seeds.s3.us-west-1.amazonaws.com/github_icon.png' width='30' height='30'></img>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

export default EventIndex;