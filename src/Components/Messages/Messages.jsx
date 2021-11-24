import c from './Messages.module.css'
import ChatList from "./ChatList/ChatList";
import ContainerChatWindow from "./ChatWindow/ContainerChatWindow";

const Messages = (props) => {
    return <div className={c.main}>
        <ChatList rawUserTileDatasets={props.MessagesPageDatasets.rawUserTileDatasets}/>
        <ContainerChatWindow
            rawMsgContentDatasets={props.MessagesPageDatasets.rawMsgContentDatasets}
            dispatch={props.dispatch}
            inputValue={props.MessagesPageDatasets.inputValue}/>
    </div>
}

export default Messages