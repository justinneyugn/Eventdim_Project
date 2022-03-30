import React from 'react';
import { Link } from 'react-router-dom';

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
        formData.append('event[id]', this.state.id);
        formData.append('event[title]', this.state.title);
        formData.append('event[details]', this.state.details);
        formData.append('event[creator_id]', this.state.creator_id);
        formData.append('event[location]', this.state.location);
        formData.append('event[ticket_price]', this.state.ticket_price);
        formData.append('event[date]', this.state.date);
        formData.append('event[photo]', this.state.photoUrl);

        console.log(this.state.id)
        console.log(formData)
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
        debugger
        if (!this.props.event) return null;
        const img = this.state.photoUrl ? (
            <div className='img'>Image uploaded</div>
        ) : (
            <div className='img'></div>
        )
        return (
            <div className="form-container">
                <header className="nav-bar">
                    <Link to='/' className='website_name'>eventdim</Link>
                    <nav>
                        <ul className='nav_links'>
                            <li><div className='btn'>{this.props.currentUser.email}</div></li>
                            <li><button className="btn create form-logout" onClick={this.props.logout}>Log Out</button></li>
                        </ul>
                    </nav>
                </header>
                <form className="form-info-container" onSubmit={this.handleSubmit}>
                    <div className='form-info'>
                        <div className='form-basic-info'>
                            <div className='form-info-heading'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='form-info-description'>
                                <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                            </div>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Title</label>
                                <input
                                    className='form-input'
                                    type="text"
                                    onChange={this.update('title')}
                                    value={this.state.title}
                                    placeholder="Be clear and descriptive"
                                />
                            </div>
                        </div>
                        <div className='form-location'>
                            <div className='form-info-heading'>
                                <h2>Location</h2>
                            </div>
                            <div className='form-info-description'>
                                <p>Help people in the area discover your event and let attendees know where to show up.</p>
                            </div>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Location</label>
                                <input
                                    className='form-input'
                                    type="text"
                                    onChange={this.update('location')}
                                    value={this.state.location}
                                />
                            </div>
                        </div>
                        <div className='form-date'>
                            <div className='form-info-heading'>
                                <h2>Date</h2>
                            </div>
                            <div className='form-info-description'>
                                <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                            </div>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Date</label>
                                <input
                                    className='form-input'
                                    type="text"
                                    onChange={this.update('date')}
                                    value={this.state.date}
                                />
                            </div>
                        </div>
                        <div className='form-image'>
                            <div className='form-info-heading'>
                                <h2>Main Event Image</h2>
                            </div>
                            <div className='form-info-description'>
                                <p>This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</p>
                            </div>
                            <div className='custom-image'>
                                <label className="custom-file-upload">
                                    <input 
                                        type="file" 
                                        onChange={this.handleFile}
                                    />
                                    Click to add main event image.
                                </label>
                                {img}
                            </div>
                        </div>
                        <div className='form-description'>
                            <div className='form-info-heading'>
                                <h2>Description</h2>
                            </div>
                            <div className='form-info-description'>
                                <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
                            </div>
                            <div className='form-info-input'>
                                <label className='form-label'>Summary</label>
                                <textarea
                                    className='form-input'
                                    type="text"
                                    placeholder="Write a short event summary to get attendees excited"
                                    onChange={this.update('details')}
                                    value={this.state.details}
                                />
                            </div>
                        </div>
                        <div className='form-ticket-price'>
                            <div className='form-info-heading'>
                                <h2>Ticket Price</h2>
                            </div>
                            <div className='form-info-description'>
                                <p></p>
                            </div>
                            <div className='form-info-input'>
                                <label className='form-label'>Ticket Price</label>
                                <input
                                    className='form-input'
                                    type="number"
                                    onChange={this.update('ticket_price')}
                                    value={this.state.ticket_price}
                                />
                            </div>
                        </div>
                        <button className='form-button' type='submit'>Publish</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EventForm;