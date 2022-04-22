# Eventdim

Eventdim is an event management site that allows users to browse and create local events. Based on the live Eventbrite site, Eventdim focuses on events based in Sacramento while provides a simple interface centered around a grid layout on the homepage. Paralleling a virtual poster board, Eventdim seeks to serve as an easily navigable app while promoting community and involvement within the Sacramento region.


The live site can be found 
[here](https://eventdim.herokuapp.com/#/).

## Technologies Used

* Ruby on Rails
   * This serves as the backend framework to hold the data tables for the Users and Events.
   * It handles the creating, updating, and destroying of user and event instances while rendering JSON objects to continue with the Redux cycle.

* React/Redux
   * This serves as the frontend library for the display of all the components.
   * It contains the API Util functions that use Ajax requests to retrieve information from the backend.
   * It contains the actions for a current user session as well as events and returns a POJO to the reducers.
   * The reducers set the state with a session, entities, and errors object
