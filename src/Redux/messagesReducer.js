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
    return state
}