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
import FoodContainer from "./events/food/food_container";
import SocialContainer from "./events/social/social_container";
import EntertainmentContainer from "./events/entertainment/entertainment_container";
import OtherContainer from "./events/other/other_container";
import Modal from "./modal/modal";
import TicketShowContainer from "./tickets/ticket_show_container";
import BookmarkShowContainer from "./bookmarks/bookmark_show_container";


const App = () => (
    <div>
        <Modal />
        {/* these are only seen if you are logged in */}
        <ProtectedRoute exact path="/new" component={CreateEventFormContainer} />
        <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer} />
        <ProtectedRoute exact path="/tickets" component={TicketShowContainer} />
        <ProtectedRoute exact path="/likes" component={BookmarkShowContainer} />

        <Route exact path="/events/:eventId" component={EventShowContainer} />

        {/* these are only seen if you are logged out */}
        <AuthRoute exact path="/signin" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <Route exact path="/" component={NavBarContainer} />
        <Route exact path="/" component={EventIndexContainer} />
        <Route exact path="/food" component={FoodContainer} />
        <Route exact path="/social" component={SocialContainer} />
        <Route exact path="/entertainment" component={EntertainmentContainer} />
        <Route exact path="/other" component={OtherContainer} />
    </div>
);

export default App;