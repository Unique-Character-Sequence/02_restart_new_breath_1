import c from './ChatWindow.module.css'
import react from 'react'
import MessageTile from "./MessageTile/MessageTile";

const ChatWindow = (props) => {
    let newMessageRef = react.createRef()
    let onUpdateMsgInput = () => {
        let text = newMessageRef.current.value
        props.updateMsgInput(text)
    }

    let doneMsgContentDatasets = props.rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)
    return <div className={c.main}>
        {doneMsgContentDatasets}
        <div>
            <input type="text"
                   ref={newMessageRef}
                   onSubmit={props.onAddMessage}
                   onChange={onUpdateMsgInput}
                   value={props.inputValue}/>
            <button onClick={props.onAddMessage}>Send</button>
        </div>
    </div>
}

export default ChatWindow;