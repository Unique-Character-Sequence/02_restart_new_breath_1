import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "communities",
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
        }
    }
})

export default profileSlice.reducer
export const {updatePostInput, addPost, setUserProfile} = profileSlice.actions