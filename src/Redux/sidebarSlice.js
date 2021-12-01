import {createSlice} from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        rawActiveFriendsDatasets: [
            {id: '222', name: 'Алексей Суслик'},
            {id: '242', name: 'Валерий Жмурик'},
            {id: '222', name: 'Василий Крысик'},
            {id: '121', name: 'Артурий Саловик'},
        ]
    },
    reducers: {
        // Пока что ничего
    }
})

export default sidebarSlice.reducer
// export const {} = sidebarSlice.actions