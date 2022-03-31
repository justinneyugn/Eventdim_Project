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

    handleCategory(field) {
        this.props.events.map( (event, idx) => {
            if (event.category === field) {
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
            }
        })
    }

    render(){
        let events = this.props.events.map( (event, idx) => {
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
                            {events}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default EventIndex;