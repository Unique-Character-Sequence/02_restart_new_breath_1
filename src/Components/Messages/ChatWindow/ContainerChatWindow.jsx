import MessageTile from "./MessageTile/MessageTile";
import {addMsgAC, updateMsgInputAC} from "../../../Redux/messagesReducer";
import ChatWindow from "./ChatWindow";

const ContainerChatWindow = (props) => {
    let onAddMessage = () => {
        let action = addMsgAC()
        props.dispatch(action)
    }
    let updateMsgInput = (text) => {
        let action = updateMsgInputAC(text)
        props.dispatch(action)
    }
    let doneMsgContentDatasets = props.rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)
    return <ChatWindow
        doneMsgContentDatasets={doneMsgContentDatasets}
        updateMsgInput={updateMsgInput}
        onAddMessage={onAddMessage}
        inputValue={props.inputValue}
    />
}

export default ContainerChatWindow;