import {cloneDeep} from "lodash";

let ADD_MSG = 'ADD_MSG'
let UPDATE_MSG_INPUT = 'UPDATE_MSG_INPUT'

let initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MSG: {
            let stateCopy = cloneDeep(state)
            let newMsg = {
                myMsg: true,
                text: state.inputValue
            }
            stateCopy.rawMsgContentDatasets.push(newMsg)
            stateCopy.inputValue = ''
            return stateCopy
        }
        case UPDATE_MSG_INPUT: {
            let stateCopy = cloneDeep(state)
            stateCopy.inputValue = action.msgText;
            return stateCopy
        }
        default:
            return state
    }
}

export const addMsgAC = () => {
    return {
        type: ADD_MSG
    }
}
export const updateMsgInputAC = (msgText) => {
    return {
        type: UPDATE_MSG_INPUT,
        msgText: msgText
    }
}
