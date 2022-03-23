import React from 'react';

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.event;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return(e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitEvent(this.state);
    }

    render() {
        return (
            <div>
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
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default EventForm;