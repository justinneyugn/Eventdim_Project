import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import EventsReducer from "./events_reducer";

const entitiesReducer = combineReducers({
    users: UsersReducer,
    events: EventsReducer
});

export default entitiesReducer;