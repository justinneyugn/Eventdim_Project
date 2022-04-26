import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import EventsReducer from "./events_reducer";
import TicketsReducer from "./tickets_reducer";
import BookmarksReducer from "./bookmarks_reducer";

const entitiesReducer = combineReducers({
    users: UsersReducer,
    events: EventsReducer,
    tickets: TicketsReducer,
    bookmarks: BookmarksReducer
});

export default entitiesReducer;