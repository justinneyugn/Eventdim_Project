import React from 'react';


class TicketForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.ticket;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.event = this.props.event[parseInt(this.props.modal)];
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState({
                [field]: e.currentTarget.value, 
                purchaser_id: this.props.currentUser.id,
                event_id: this.event.id
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitTicket(this.state).then(this.props.closeModal)
    }

    renderErrors() {
        if (this.props.errors) {
            return(
                <ul>
                    {this.props.errors.map((error, i) => {
                        return (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        )
                    })}
                </ul>
            );
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div className='ticket-form-container'>
                <div className='ticket-form-top'>
                    <div className='ticket-form-top-center'>
                        <div id='ticket-form-title'>
                            <h2 className='ticket-weight'>{this.event.title}</h2>
                        </div>
                        <div id='ticket-form-date'>
                            <h3 className='ticket-weight'>{this.event.date}</h3>
                        </div>
                        <div id='ticket-form-date'>
                            <h3 className='ticket-weight'>${this.event.ticket_price}</h3>
                        </div>
                    </div>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>
                <div className='ticket-form-errors'>
                    {this.renderErrors()}
                </div>
                <form className='ticket-form-bottom' onSubmit={this.handleSubmit}>
                    <div className='ticket-form-input-section'>
                        <div id='ticket-form-bottom-price'>
                            <h3 className='ticket-weight'>Enter amount of tickets to purchase in the box</h3>
                        </div>
                        <div className='ticket-input-box'>
                            <input 
                                type='text'
                                onChange={this.update('amount')}
                                value={this.state.amount}
                                className='ticket-form-input'
                            />
                        </div>
                        <button className='session-button ticket-form-button' type='submit'>Checkout</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TicketForm;