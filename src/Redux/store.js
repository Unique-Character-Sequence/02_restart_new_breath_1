import {combineReducers, configureStore} from "@reduxjs/toolkit"
import friendsSlice from "./friendsSlice";
import profileSlice from "./profileSlice";
import sidebarSlice from "./sidebarSlice";
import messagesSlice from "./messagesSlice";
import communitiesSlice from "./communitiesSlice";

const rootReducer = {
    ProfilePageDatasets: profileSlice,
    MessagesPageDatasets: messagesSlice,
    CommunitiesPageDatasets: communitiesSlice,
    UsersDatasets: friendsSlice,
    SidebarDatasets: sidebarSlice,
}

export const store = configureStore({
    reducer: rootReducer
})