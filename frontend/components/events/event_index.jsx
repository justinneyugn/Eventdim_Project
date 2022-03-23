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
        let events = this.props.events.map( (event, idx) => {
            return (
                <EventIndexItem
                    event={event}
                    deleteEvent={this.props.deleteEvent}
                    key={`event-${idx}`}
                />
            )
        })
        return (
            <div>
                <ul>
                    {events}
                </ul>
                <Link to='/events/new'>New Event</Link>
            </div>
        )
    }
}

export default EventIndex;