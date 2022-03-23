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
        return (
            <div>
                <h1>{this.props.event.title}</h1>
                <h2>{this.props.event.location}</h2>
                <h3>{this.props.event.ticket_price}</h3>
                <p>{this.props.event.details}</p>
                <Link to='/'></Link>
            </div>
        )
    }
}

export default EventShow;