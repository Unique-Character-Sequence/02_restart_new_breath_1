import c from './Messages.module.css'
import ChatList from "./ChatList/ChatList";
import ChatWindow from "./ChatWindow/ChatWindow";

const Messages = (props) => {
    return <div className={c.main}>
        <ChatList rawUserTileDatasets={props.rawUserTileDatasets}/>
        <ChatWindow rawMsgContentDatasets={props.rawMsgContentDatasets}/>
    </div>
}

export default Messages