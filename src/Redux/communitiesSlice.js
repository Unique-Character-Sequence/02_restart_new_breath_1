import {createSlice} from "@reduxjs/toolkit";

const communitiesSlice = createSlice({
    name: "communities",
    initialState: {
        rawCommunitiesListDatasets: [
            {id: '222', name: 'Жухликовое Сообщество', subs_amount: '1553', isUserSubbed: true},
            {id: '242', name: 'На рофлах', subs_amount: '5533', isUserSubbed: false},
            {id: '222', name: 'Данк Мимз', subs_amount: '2223', isUserSubbed: true},
            {id: '121', name: 'Гемшим Инфаркт', subs_amount: '553', isUserSubbed: false},
        ]
    },
    reducers: {
        // someFunc(state, action) {state.thing = action.payload},
        // someFunc2(state) {state.thing = ''},
    }
})

export default communitiesSlice.reducer
// export const {} = communitiesSlice.actions