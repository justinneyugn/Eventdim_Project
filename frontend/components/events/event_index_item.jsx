import React from "react";
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.afterDelete = this.afterDelete.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    afterDelete(e) {
        e.preventDefault();
        this.props.deleteEvent(this.props.event.id).then( response => {
        })
    }

    render(){
        // if (!this.props.event) return null;

        const editDelete = () => {
            if (this.props.currentUser && this.props.currentUser.id === this.props.event.creator_id) {
                return (
                    <div>
                        <Link className="event-edit" to={`/events/${this.props.event.id}/edit`}>Edit</Link>
                        <br />
                        <button className="event-delete" onClick={this.afterDelete}>
                            Delete
                        </button>
                    </div>
                )
            }
        }
        return (
            <li className="event-item-container">
                <Link className="event-item" to={`/events/${this.props.event.id}`}>
                    <div className="event-picture">
                        <img src={`${this.props.event.photoUrl}`} width="370" height="178.98"></img>
                    </div>
                    <div className="event-item-bottom-container">
                        <div className="event-item-bottom">
                            <div className="event-title">
                                <h3>{this.props.event.title}</h3>
                            </div>
                            <div className="event-date">
                                <p>{this.props.event.date}</p>
                            </div>
                            <div className="event-location">
                                <p>{this.props.event.location}</p>
                            </div>
                            <div className="event-ticket-price">
                                <p>Starts at ${this.props.event.ticket_price}</p>
                            </div>
                            <div className="event-edit-delete"> 
                                {editDelete()}
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

export default EventIndexItem;