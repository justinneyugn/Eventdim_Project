# Eventdim


[Live Link](https://eventdim.herokuapp.com/#/)

Eventdim is an event management site that allows users to browse and create local events. Based on the live [Eventbrite](https://www.eventbrite.com/) site, Eventdim focuses on events based in Sacramento while provides a simple interface centered around a grid layout on the homepage. Paralleling a virtual poster board, Eventdim seeks to serve as an easily navigable app while promoting community and involvement within the Sacramento region.

<img src="https://github.com/justinneyugn/Eventdim_Project/blob/main/app/assets/images/preview_pic.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;">

## Table of Contents  
* [Key Features](#key-features)  
* [Technologies Used](#technologies-used)  
* [Planned Features](#planned-features)


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


<img src="https://github.com/justinneyugn/Eventdim_Project/blob/main/app/assets/images/ticket_modal.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;">
  
  
Within the show page of each event, logged-in users are presented with an option of purchasing a ticket. Through a modal, users can input the amount of tickets they would like and click on the X if they do not want to purchase any. If they try to checkout without inputting a number, they are prompted with an error message. Within the navbar on the homepage, users can click on the 'Tickets' option to get a grid-displayed list of all the tickets they purchased and can delete them if they do not wish to own them anymore. Ideally, there would be a refund policy that will be later implemented. 

An issue that occurred with the modal was that the event's ID did not persist when opening the modal. This was needed when creating tickets since the ticket would store the event's ID in order to create that association. In order to save that ID when opening the modal and creating a ticket, I sent it in as a string argument when the 'Tickets' button was clicked (since the modal in the state would hold a string if it was open, null if it was closed), then converted it into an integer when saving the newly created ticket.

```javascript
<button className='ticket-button' onClick={() => this.props.openModal(`${this.props.event.id}`)}>Tickets</button>
```

```javascript
this.event = this.props.event[parseInt(this.props.modal)];
```


### Liking an Event


<img src="https://github.com/justinneyugn/Eventdim_Project/blob/main/app/assets/images/likes_show.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;">



Logged-in users can like events within the homepage only if they have not already liked the event previously. These events are stored within a separate 'Likes' page that can be navigated to within the navbar of the homepage. This page has a grid-display of all liked events and users can unlike an event to remove it from the page. If these events are clicked, users are redirected to the specific event's show page.

In order to hide the 'like' button if the user already liked the event previously, I looped through the 'likes' already saved within the state and created a conditional to see if the user already liked the event (it initially was called 'bookmarks' which is reflected within the code).

```javascript
const like = () => {
    let exists = false;
    if (this.props.currentUser) {
        this.props.bookmarks.map( (bookmark, idx) => {
            if (bookmark.event_id === this.props.event.id && bookmark.bookmarker_id === this.props.currentUser.id) {
                exists = true;
            }
        })
        if (!exists) {
            return (
                <div>
                    <button className="event-delete" onClick={this.handleLike}>Like</button>
                </div>
            )
        } else {
            return null;
        }
    }
}
```

## Technologies Used

* Front End: React.js, Redux
   * Supports front-end handling of events, categories, likes, and tickets
   * Maintains user session so logged-in users stay logged in upon refresh
   * Contains API Util functions, actions, and reducers for all components 
* Back End: Ruby on Rails, Jbuilder, Active Storage, and PostgreSQL database
   * This serves as the backend framework to hold the data tables for the Users, Events, Likes, and Tickets
   * It handles the creating, updating, and destroying of instances while formulating JSON objects to continue with the Redux cycle
* Other: Amazon AWS S3, JavaScript
   *  AWS S3 handles image hosting to store images for each event as well as image submission when users create an event
   *  Webpack was used for bundling and Babel.js for transpiling
* Hosting: Eventdim is hosted on Heroku


## Planned Features

* ATM feature upon checkout when purchasing tickets
* Refund policy when cancelling tickets
