import MessageTile from "./MessageTile/MessageTile";
import c from './ChatWindow.module.css'
import react from 'react'

const ChatWindow = (props) => {
    let newMessageRef = react.createRef()
    let addMessage = () => {
        let text = newMessageRef.current.value
        alert(text)
    }
    let doneMsgContentDatasets = props.rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)
    return <div className={c.main}>
        {doneMsgContentDatasets}
        <div>
            <input ref={newMessageRef} type="text"/>
            <button onClick={addMessage}>Send</button>
        </div>
    </div>
}

export default ChatWindow;