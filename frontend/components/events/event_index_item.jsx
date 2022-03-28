import React from "react";
import { Link, Redirect } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.afterDelete = this.afterDelete.bind(this);
    }

    afterDelete(e) {
        e.preventDefault();
        this.props.deleteEvent(this.props.event.id).then( response => {
            // this.props.history.push('/')
            // console.log("deleted")
        })
    }

    // componentDidMount(){
    //     this.props.requestEvent(this.props.event.id);
    // }

    render(){
        // if (!this.props.event) return null;

        const editDelete = () => {
            if (this.props.currentUser) {
                return (
                    <div>
                        <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
                        <br />
                        <button onClick={this.afterDelete}>
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
                    {/* <div className="event-like">
                        <button>Like</button>
                    </div> */}
                    <div className="event-item-bottom-container">
                        <div className="event-item-bottom">
                            <div className="event-title">
                                <h3>{this.props.event.title}</h3>
                            </div>
                            <div className="event-location">
                                <h5>{this.props.event.location}</h5>
                            </div>
                            <div className="event-ticket-price">
                                <h5>Starts at ${this.props.event.ticket_price}</h5>
                            </div>
                            {/* <div className="event-creator-email">
                                <h5>{this.props.event.creator.email}</h5>
                            </div> */}
                            {editDelete()}
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

export default EventIndexItem;