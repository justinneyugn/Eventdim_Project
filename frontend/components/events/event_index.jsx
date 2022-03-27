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
                    currentUser={this.props.currentUser}
                    requestEvent={this.props.requestEvent}
                    history={this.props.history}
                    key={`event-${idx}`}
                />
            )
        })
        return (
            <div>
                <ul>
                    <img src="https://eventdim-seeds.s3.us-west-1.amazonaws.com/homepage.jpeg"></img>
                    {events}
                </ul>
            </div>
        )
    }
}

export default EventIndex;