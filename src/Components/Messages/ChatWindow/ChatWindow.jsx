import MessageTile from "./MessageTile/MessageTile";
import c from './ChatWindow.module.css'

const ChatWindow = (props) => {
    let doneMsgContentDatasets = props.rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)
    return <div className={c.main}>
        {doneMsgContentDatasets}
        <div>
            <input type="text"/>
            <button>Send</button>
        </div>
    </div>
}

export default ChatWindow;