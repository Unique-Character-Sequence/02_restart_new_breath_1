import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {switchFollowedStatusAPI} from "../API/samuraijsAPI";

export const switchFollowedStatusThunk = createAsyncThunk(
    'friends/switchFollowedStatusThunk',
    (args, storeAPI) => {
        storeAPI.dispatch(setIsFollowingPending(args.id, true))
        if (args.followed === true) {
            switchFollowedStatusAPI(args.id, args.followed)
                .then(data => {
                    console.log('switchFollowedStatus data.data', data)
                    data.resultCode === 0 ? storeAPI.dispatch(switchFollowedStatus(args.id)) : alert(data.messages)
                    storeAPI.dispatch(setIsFollowingPending(args.id, false))
                })
        }
        if (args.followed === false) {
            switchFollowedStatusAPI(args.id, args.followed)
                .then(data => {
                    console.log('switchFollowedStatus data.data', data)
                    data.resultCode === 0 ? storeAPI.dispatch(switchFollowedStatus(args.id)) : alert(data.messages)
                    storeAPI.dispatch(setIsFollowingPending(args.id, false))
                })
        }
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