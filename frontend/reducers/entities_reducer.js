import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import EventsReducer from "./events_reducer";
import TicketsReducer from "./tickets_reducer";

const entitiesReducer = combineReducers({
    users: UsersReducer,
    events: EventsReducer,
    tickets: TicketsReducer
});

export default entitiesReducer;