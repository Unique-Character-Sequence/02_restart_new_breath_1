import {createSlice} from "@reduxjs/toolkit";

let friendsSlice = createSlice({
    name: "friends",
    initialState: {
        rawUsersDatasets: [],
        itemsPerSet: 5,
        totalNumberOfUsers: 0,
        currentSetOfUsers: 1
    },
    reducers: {
        switchFollowedStatus(state, action) {
            state.rawUsersDatasets = state.rawUsersDatasets.map(userDataSet => {
                if (userDataSet.id === action.payload) {
                    return {...userDataSet, followed: !userDataSet.followed}
                } else return userDataSet
            })
        },
        setUsersDatasets(state, action) {
            state.rawUsersDatasets = action.payload
        },
        setCurrentSetOfUsers(state, action) {
            state.currentSetOfUsers = action.payload
        },
        setTotalNumberOfUsers(state, action) {
            state.totalNumberOfUsers = action.payload
        },
        setIsPageLoading(state, action) {
            state.isPageLoading = action.payload
        },
        setIsFollowingPending(state, action) {
            state.rawUsersDatasets = state.rawUsersDatasets.map(userDataSet => {
                return userDataSet.id === action.payload ? {
                    ...userDataSet,
                    isFollowingPending: !userDataSet.isFollowingPending
                } : userDataSet;
            })
        },
    }
})

export default friendsSlice.reducer
export const {
    switchFollowedStatus,
    setUsersDatasets,
    setCurrentSetOfUsers,
    setTotalNumberOfUsers,
    setIsPageLoading,
    setIsFollowingPending
} = friendsSlice.actions