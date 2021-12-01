import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {communitiesReducer} from "./communitiesReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";

let reducers = combineReducers({
    ProfilePageDatasets: profileReducer,
    MessagesPageDatasets: messagesReducer,
    CommunitiesPageDatasets: communitiesReducer,
    SidebarDatasets: sidebarReducer,
    UsersDatasets: friendsReducer
})

//TODO: Изменить на redux-toolkit configureStore
const store = createStore(
    reducers, /* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store