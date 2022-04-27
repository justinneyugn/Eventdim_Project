# Eventdim


[Live Link](https://eventdim.herokuapp.com/#/)

Eventdim is an event management site that allows users to browse and create local events. Based on the live [Eventbrite](https://www.eventbrite.com/) site, Eventdim focuses on events based in Sacramento while provides a simple interface centered around a grid layout on the homepage. Paralleling a virtual poster board, Eventdim seeks to serve as an easily navigable app while promoting community and involvement within the Sacramento region.

<img src="https://github.com/justinneyugn/Eventdim_Project/blob/main/app/assets/images/preview_pic.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;">

## Key Features

### Creating an Event


<img src="https://github.com/justinneyugn/Eventdim_Project/blob/main/app/assets/images/create_edit_event.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;">
  
  
Events are stored locally as well as in the Redux state so that they persist upon refresh. Logged-in users can create an event that will appear on the event grid on the homepage. They also are given the ability to edit or delete their own events within the grid, but cannot do the same to events that they did not create. Based on the details they include upon creation, each event renders a show page when clicked, containing all the information the user inputted. All areas of the event form page must be filled out or else the user is prompted with an error message. 

As the event form page includes image submission, a FormData object must be created and sent when creating each event. Depending on if the user is creating or editing an event, they will be sent to either the homepage or event show page to see their change.

```javascript 
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

    this.props.submitEvent(formData).then( response => {
        if (this.props.formType === 'Create an event') {
            this.props.history.push(`/`);
        } 
        else {
            this.props.history.push(`/events/${this.state.id}`)
        };
    })
}
```


### Purchasing a Ticket

Within the show page of each event, logged-in users are presented with an option of purchasing a ticket. Through a modal, users can input the amount of tickets they would like and click on the X if they do not want to purchase any. If they try to checkout without inputting a number, they are prompted with an error message. Within the navbar on the homepage, users can click on the 'Tickets' option to get a grid-displayed list of all the tickets they purchased and can delete them if they do not wish to own them anymore. Ideally, there would be a return policy that will be later implemented. 

An issue that occurred with the modal was that the event's ID did not persist when opening the modal. This was needed when creating tickets since the ticket would store the event's ID in order to create that association. In order to save that ID when opening the modal and creating a ticket, I sent it in as a string argument when the 'Tickets' button was clicked (since the modal in the state would hold a string if it was open, null if it was closed), then converted it into an integer when saving the newly created ticket.

```javascript
<button className='ticket-button' onClick={() => this.props.openModal(`${this.props.event.id}`)}>Tickets</button>
```

```javascript
this.event = this.props.event[parseInt(this.props.modal)];
```

## Technologies Used

* Ruby on Rails
   * This serves as the backend framework to hold the data tables for the Users and Events.
   * It handles the creating, updating, and destroying of user and event instances while rendering JSON objects to continue with the Redux cycle.

* React/Redux
   * This serves as the frontend library for the display of all the components.
   * It contains the API Util functions that use Ajax requests to retrieve information from the backend.
   * It contains the actions for a current user session as well as events and returns a POJO to the reducers.
   * The reducers set the state with a session, entities, and errors object
