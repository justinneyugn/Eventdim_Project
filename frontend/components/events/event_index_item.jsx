import React from "react";
import { Link, Redirect } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.afterDelete = this.afterDelete.bind(this);
    }

    afterDelete() {
        this.props.deleteEvent(this.props.event.id);
    }

    render(){
        const editDelete = () => {
            if (this.props.currentUser) {
                return (
                    <div>
                        <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
                        <br />
                        <button onClick={() => this.props.deleteEvent(this.props.event.id)}>
                            <Link to="/">
                                Delete
                            </Link>
                        </button>
                    </div>
                )
            }
        }
        return (
            <li>
                <Link to={`/events/${this.props.event.id}`}>{this.props.event.title}</Link>
                <br/>
                {editDelete()}
            </li>
        )
    }
}

export default EventIndexItem;