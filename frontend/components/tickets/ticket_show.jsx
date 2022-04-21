import React from 'react';
import NavBar from '../nav_bar/nav_bar';

class TicketShow extends React.Component {
    constructor(props) {
        super(props);
        this.events = this.props.events;
    }

    componentDidMount() {
        this.props.requestTickets();
    }

    showUserTickets() {
        let userTickets = [];
        for (let ticket of this.props.tickets) {
            if (ticket.purchaser_id === this.props.currentUser.id) {
                userTickets.push(ticket);
            }
        }
        if (userTickets.length === 0) {
            return (
                <div id="no-tickets">You have not purchased any tickets.</div>
            )
        } else {
            return userTickets.map((ticket, i) => (
                <div key={i} className="ticket-show">
                    <div id='ticket-amount'>{ticket.amount}</div>
                    <div id='ticket-event-title'>{this.events[ticket.event_id].title}</div>
                </div>
            ))
        }
    }

    render() {
        if (!this.props.tickets) return null;
        return (
            <div>
                <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
                <div className='ticket-show'>
                    <div id="ticket-header">{this.props.currentUser.email}: Your Tickets</div>
                    <div className="reports-grid">{this.showUserTickets()}</div>
                </div>
            </div>
        )
    }
}

export default TicketShow;