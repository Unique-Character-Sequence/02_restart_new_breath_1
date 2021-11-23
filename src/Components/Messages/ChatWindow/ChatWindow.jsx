import MessageTile from "./MessageTile/MessageTile";
import c from './ChatWindow.module.css'
import react from 'react'
import {addMsgAC, updateMsgInputAC} from "../../../Redux/messagesReducer";

const ChatWindow = (props) => {
    let newMessageRef = react.createRef()
    let onAddMessage = () => {
        let action = addMsgAC()
        props.dispatch(action)
    }
    let onUpdateMessageInput = () => {
        let text = newMessageRef.current.value
        let action = updateMsgInputAC(text)
        props.dispatch(action)
    }

    let doneMsgContentDatasets = props.rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)
    return <div className={c.main}>
        {doneMsgContentDatasets}
        <div>
            <input type="text"
                   ref={newMessageRef}
                   onSubmit={onAddMessage}
                   onChange={onUpdateMessageInput}
                   value={props.inputValue}/>
            <button onClick={onAddMessage}>Send</button>
        </div>
    </div>
}

export default ChatWindow;