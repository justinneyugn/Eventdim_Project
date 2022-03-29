import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.event;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        this.setState({photoUrl: e.currentTarget.files[0]})
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[title]', this.state.title);
        formData.append('event[details]', this.state.details);
        formData.append('event[creator_id]', this.state.creator_id);
        formData.append('event[location]', this.state.location);
        formData.append('event[ticket_price]', this.state.ticket_price);
        formData.append('event[date]', this.state.date);
        formData.append('event[photo]', this.state.photoUrl);

        this.props.submitEvent(formData).then( response => {
            if (this.props.formType === 'Create an event') {
                this.props.history.push(`/`);
            } 
            else {
                this.props.history.push(`/events/${this.state.id}`)
            };
        })
    }

    render() {
        console.log(this.state);
        if (!this.props.event) return null;
        return (
            <div className="events-container">
                <nav className="events-navbar">
                    <div className="events-nav-container">
                        <Link to='/' className='website_name events-logo'>eventdim</Link>
                        <ul className="events-ul">
                            <li>
                                <Link to='/'>{this.props.currentUser.email}</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={this.update('title')}
                        value={this.state.title}
                    />
                    <br />
                    <label>Details</label>
                    <textarea
                        type="text"
                        value={this.state.details}
                        onChange={this.update('details')}
                    />
                    <br />
                    <label>Location</label>
                    <input
                        type="text"
                        onChange={this.update('location')}
                        value={this.state.location}
                    />
                    <br />
                    <label>Ticket Price</label>
                    <input
                        type="number"
                        onChange={this.update('ticket_price')}
                        value={this.state.ticket_price}
                    />
                    <br />
                    <label>Date</label>
                    <input
                        type="text"
                        onChange={this.update('date')}
                        value={this.state.date}
                    />
                    <br />
                    <input 
                        type="file" 
                        onChange={this.handleFile}/>
                    <br />
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default EventForm;