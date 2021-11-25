import {addMsgAC, updateMsgInputAC} from "../../../Redux/messagesReducer";
import ChatWindow from "./ChatWindow";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        rawMsgContentDatasets: state.MessagesPageDatasets.rawMsgContentDatasets,
        inputValue: state.MessagesPageDatasets.inputValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMsgInput: (text) => {
            let action = updateMsgInputAC(text)
            dispatch(action)
        },
        onAddMessage: () => {
            let action = addMsgAC()
            dispatch(action)
        }
    }
}

const ContainerChatWindow = connect(mapStateToProps, mapDispatchToProps)(ChatWindow)

export default ContainerChatWindow;