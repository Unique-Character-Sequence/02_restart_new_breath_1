import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {switchFollowedStatusAPI} from "../API/samuraijsAPI";

export const switchFollowedStatusThunk = createAsyncThunk(
    'friends/switchFollowedStatusThunk',
    async (args) => {
        // Без async/await промис не успеет зарезолвиться и вернётся промис, а не объект
        let data = await switchFollowedStatusAPI(args.id, args.followed)
        return data

    }
)

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
        switchIsFollowingPending(state, action) {
            state.rawUsersDatasets = state.rawUsersDatasets.map(userDataSet => {
                return userDataSet.id === action.payload ? {
                    ...userDataSet,
                    isFollowingPending: !userDataSet.isFollowingPending
                } : userDataSet;
            })
        },
    },
    extraReducers: {
        [switchFollowedStatusThunk.pending]: (state, action) => {
            friendsSlice.caseReducers.switchIsFollowingPending(state, {payload: action.meta.arg.id})
        },
        [switchFollowedStatusThunk.fulfilled]: (state, action) => {
            friendsSlice.caseReducers.switchIsFollowingPending(state, {payload: action.meta.arg.id})
            action.payload.resultCode === 0 ?
                friendsSlice.caseReducers.switchFollowedStatus(state, {payload: action.meta.arg.id}) :
                alert(action.payload.messages)
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