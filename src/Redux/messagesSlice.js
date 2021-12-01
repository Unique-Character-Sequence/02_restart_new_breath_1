import {createSlice} from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        rawUserTileDatasets: [
            {id: 1, name: 'Бибус Челикович'},
            {id: 2, name: 'Абобус Беброчевских'},
            {id: 3, name: 'Бибабоба Кринжов'},
            {id: 4, name: 'Бублик Бибубликовый'},
        ],
        rawMsgContentDatasets: [
            {text: 'Привет, буброчелик!', myMsg: true},
            {text: 'Привеееееет, шо ты, как ты, чё дышишь', myMsg: false},
            {text: 'Да вот, взгрустнул чё-т немного, но, знай, мы не одни', myMsg: true},
            {text: 'Сообщенивание 4', myMsg: false},
        ],
        inputValue: 'Ааааа!'
    },
    reducers: {
        addMsg(state) {
            state.rawMsgContentDatasets.push({
                myMsg: true,
                text: state.inputValue
            })
            state.inputValue = ''
        },
        updateMsgInput(state, action) {
            state.inputValue = action.payload
        },
    }

})

export default messagesSlice.reducer
export const {addMsg, updateMsgInput} = messagesSlice.actions