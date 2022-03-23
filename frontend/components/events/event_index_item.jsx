import React from "react";
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li>
                <Link to={`/events/${this.props.event.id}`}>{this.props.event.title}</Link>
                <br/>
                <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
                <br />
                <button onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
            </li>
        )
    }
}

export default EventIndexItem;