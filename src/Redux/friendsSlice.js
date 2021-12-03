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
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
    }
})

export default friendsSlice.reducer
export const {
    switchFollowedStatus,
    setUsersDatasets,
    setCurrentSetOfUsers,
    setTotalNumberOfUsers,
    setIsLoading
} = friendsSlice.actions