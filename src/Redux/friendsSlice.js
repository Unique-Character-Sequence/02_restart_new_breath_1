import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsersApi, switchFollowedStatusAPI} from "../API/samuraijsAPI";

export const switchFollowedStatusThunk = createAsyncThunk(
    'friends/switchFollowedStatusThunk',
    async (args) => {
        // Без async/await промис не успеет зарезолвиться и вернётся промис, а не объект
        let data = await switchFollowedStatusAPI(args.id, args.followed)
        return data
    }
)

export const requestSetUsersDatasetsThunk = createAsyncThunk(
    'friends/requestSetUsersDatasetsThunk',
    async (args) => {
        let data = await getUsersApi(args.count, args.page)
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
            for (let userDataSet of state.rawUsersDatasets) {
                if (userDataSet.id === action.payload) userDataSet.followed = !userDataSet.followed
            }
        },
        setUsersDatasets(state, action) {
            // Не action.payload, т.к эта функция получает не сгенерированный RTK, а напрямую отданный
            state.rawUsersDatasets = action
        },
        setCurrentSetOfUsers(state, action) {
            state.currentSetOfUsers = action.payload
        },
        setTotalNumberOfUsers(state, action) {
            state.totalNumberOfUsers = action
        },
        setIsPageLoading(state, action) {
            state.isPageLoading = action
        },
        switchIsFollowingPending(state, action) {
            for (let userDataSet of state.rawUsersDatasets) {
                if (userDataSet.id === action.payload) userDataSet.isFollowingPending = !userDataSet.isFollowingPending
            }
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
        [switchFollowedStatusThunk.rejected]: (state, action) => {
            console.log("switchFollowedStatusThunk.rejected:", action)
            alert(`switchFollowedStatusThunk.rejected\n\n${action.error.message}\nAre you using the correct api key?`)
        },
        [requestSetUsersDatasetsThunk.pending]: (state) => {
            friendsSlice.caseReducers.setIsPageLoading(state, true)
        },
        [requestSetUsersDatasetsThunk.fulfilled]: (state, action) => {
            friendsSlice.caseReducers.setIsPageLoading(state, false)
            friendsSlice.caseReducers.setUsersDatasets(state, action.payload.items)
            friendsSlice.caseReducers.setTotalNumberOfUsers(state, action.payload.totalCount)
        },
        [requestSetUsersDatasetsThunk.rejected]: (state, action) => {
            console.log("requestSetUsersDatasetsThunk.rejected", action)
            alert(`requestSetUsersDatasetsThunk.rejected\n\n${action.error.message}`)
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