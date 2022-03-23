class EventIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li>
                <Link to={`/events/${this.props.event.id}`}>{this.props.event.title}</Link>
                <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
                <button onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
            </li>
        )
    }
}

export default EventIndexItem;