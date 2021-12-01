
import ChatWindow from "../Components/Messages/ChatWindow/ChatWindow";
import {connect} from "react-redux";
import {addMsg, updateMsgInput} from "../Redux/messagesSlice";

let mapStateToProps = (state) => {
    return {
        rawMsgContentDatasets: state.MessagesPageDatasets.rawMsgContentDatasets,
        inputValue: state.MessagesPageDatasets.inputValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMsgInput: (text) => {
            let action = updateMsgInput(text)
            dispatch(action)
        },
        onAddMessage: () => {
            let action = addMsg()
            dispatch(action)
        }
    }
}

const ContainerChatWindow = connect(mapStateToProps, mapDispatchToProps)(ChatWindow)

export default ContainerChatWindow;