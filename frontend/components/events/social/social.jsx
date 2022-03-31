import React from 'react';
import EventIndexItem from '../event_index_item';
import { Link } from 'react-router-dom';
import NavBar from '../../nav_bar/nav_bar';

class Social extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // window.scrollTo(0,0)
        this.props.requestEvents();
    }

    render(){
        let socials = [];
        for (let event of this.props.events) {
            if (event.category === 'social') {
                socials.push(event);
            }
        }

        let socialEvents = socials.map( (event, idx) => {
            return (
                <EventIndexItem
                    event={event}
                    deleteEvent={this.props.deleteEvent}
                    currentUser={this.props.currentUser}
                    requestEvent={this.props.requestEvent}
                    history={this.props.history}
                    key={`event-${idx}`}
                />
            )
        })
        return (
            <div>
                <NavBar 
                    currentUser={this.props.currentUser}
                    logout={this.props.logout}
                />
                <div className="home-container">
                    <section className='home-picture'>
                        <img src="https://eventdim-seeds.s3.us-west-1.amazonaws.com/homepage.jpeg"></img>
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
                            <div>
                                <Link to='/'>All</Link>
                                <Link to='/food'>Food/Drinks</Link>
                                <Link to='/social'>Social</Link>
                                <Link to='/entertainment'>Entertainment</Link>
                                <Link to='/other'>Other</Link>
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
                            <ul className='home-events'>
                                {socialEvents}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Social;