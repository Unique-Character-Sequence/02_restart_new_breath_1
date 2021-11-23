let ADD_MSG = 'ADD_MSG'
let UPDATE_MSG_INPUT = 'UPDATE_MSG_INPUT'

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MSG:
            let newMsg = {
                myMsg: true,
                text: state.inputValue
            }
            state.rawMsgContentDatasets.push(newMsg)
            state.inputValue = ''
            break
        case UPDATE_MSG_INPUT:
            state.inputValue = action.msgText;
            break
    }
    // return state
    // Казалось бы, что мы должны возвращать его, но всё и так работает, потому
    // что мы взаимодействуем с ссылкой на store
    return {}
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
