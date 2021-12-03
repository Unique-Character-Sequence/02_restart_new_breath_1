import {configureStore} from "@reduxjs/toolkit"
import friendsSlice from "./friendsSlice";
import profileSlice from "./profileSlice";
import sidebarSlice from "./sidebarSlice";
import messagesSlice from "./messagesSlice";
import communitiesSlice from "./communitiesSlice";
import authSlice from "./authSlice";

const rootReducer = {
    ProfilePageDatasets: profileSlice,
    MessagesPageDatasets: messagesSlice,
    CommunitiesPageDatasets: communitiesSlice,
    UsersDatasets: friendsSlice,
    SidebarDatasets: sidebarSlice,
    AuthData: authSlice
}

export const store = configureStore({
    reducer: rootReducer
})