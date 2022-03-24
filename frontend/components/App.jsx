import React from "react";
import { Route} from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EventIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import EditEventFormContainer from './events/edit_event_form_container';
import CreateEventFormContainer from './events/create_event_form_container';


const App = () => (
    <div>
        {/* these are only seen if you are logged in */}
        <ProtectedRoute exact path="/new" component={CreateEventFormContainer} />
        <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer} />

        <Route path="/events/:eventId" component={EventShowContainer} />

        {/* these are only seen if you are logged out */}
        <AuthRoute path="/signin" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        <Route exact path="/" component={NavBarContainer} />
        <Route exact path="/" component={EventIndexContainer} />
    </div>
);

export default App;