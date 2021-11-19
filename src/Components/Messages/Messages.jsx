import c from './Messages.module.css'
import ChatList from "./ChatList/ChatList";
import ChatWindow from "./ChatWindow/ChatWindow";

const Messages = (props) => {
    return <div className={c.main}>
        <ChatList rawUserTileDatasets={props.MessagesPageDatasets.rawUserTileDatasets}/>
        <ChatWindow rawMsgContentDatasets={props.MessagesPageDatasets.rawMsgContentDatasets}/>
    </div>
}

export default Messages