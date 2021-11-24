import c from './ChatWindow.module.css'
import react from 'react'

const ChatWindow = (props) => {
    let newMessageRef = react.createRef()
    let onUpdateMsgInput = () => {
        let text = newMessageRef.current.value
        props.updateMsgInput(text)
    }

    return <div className={c.main}>
        {props.doneMsgContentDatasets}
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