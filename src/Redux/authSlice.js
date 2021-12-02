import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        setUserCredentials(state, action) {
            state.userCredentials = action.payload
        }
    }
})

export default authSlice.reducer
export const {setUserCredentials} = authSlice.actions