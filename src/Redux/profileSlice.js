import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProfileApi, getStatusApi, updateStatusApi} from "../API/samuraijsAPI";

export const setUserProfileThunk = createAsyncThunk(
    "profile/setUserProfileThunk",
    async (arg) => {
        let data = await getProfileApi(arg)
        let status = await getStatusApi(arg)
        console.log({...data, status: status})
        return {...data, status: status}
    }
)
export const updateStatusThunk = createAsyncThunk(
    "profile/updateStatusThunk",
    async (arg) => {
        let data = await updateStatusApi(arg)
        return {data, arg}
    }
)

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        rawPostDatasets: [
            {post_id: '1', author: 'Абобус Алексеич', likes_amount: '99', text: 'Флексанул конкретно'},
            {post_id: '2', author: 'Бибибус Чечевичкин', likes_amount: '299', text: 'Очень конкретно'},
            {post_id: '3', author: 'Бибибус Кукурача', likes_amount: '19', text: 'Жёстким флексом'},
        ],
        userProfileDataset: {fullName: 'qq'},
        inputValue: 'Чё... Аааааа... Чё...',
    },
    reducers: {
        updatePostInput(state, action) {
            state.inputValue = action.payload
        },
        addPost(state) {
            state.rawPostDatasets.push({
                post_id: '5',
                author: 'Жрумбус Крякус',
                likes_amount: '0',
                text: state.inputValue
            })
            state.inputValue = ''
        },
        setUserProfile(state, action) {
            state.userProfileDataset = action.payload
        },
        switchUserStatusEditMode(state) {
            state.isUserStatusInEditMode = !state.isUserStatusInEditMode
        },
        setUserStatus(state, action) {
            // console.log("setUserStatus", action.payload)
            state.userProfileDataset.status = action.payload.arg
        },
        switchIsUserStatusPending(state) {
            state.isUserStatusPending = !state.isUserStatusPending
        }
    },
    extraReducers: {
        [setUserProfileThunk.fulfilled]: (state, action) => {
            profileSlice.caseReducers.setUserProfile(state, action)
        },
        [setUserProfileThunk.rejected]: (state, action) => {
            alert('setUserProfileThunk.rejected')
        },
        [updateStatusThunk.fulfilled]: (state, action) => {
            // console.log("updateStatusThunk.fulfilled", action)
            profileSlice.caseReducers.setUserStatus(state, action)
        },
        [updateStatusThunk.rejected]: (state, action) => {
            alert('setUserStatus.rejected')
        },
    }
})

export default profileSlice.reducer
export const {
    updatePostInput,
    switchIsUserStatusPending,
    setUserStatus,
    switchUserStatusEditMode,
    addPost,
    setUserProfile
} = profileSlice.actions