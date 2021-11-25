import c from './Messages.module.css'
import ChatList from "./ChatList/ChatList";
import ContainerChatWindow from "./ChatWindow/ContainerChatWindow";


const Messages = (props) => {

    return <div className={c.main}>
        <ChatList rawUserTileDatasets={props.MessagesPageDatasets.rawUserTileDatasets}/>
        <ContainerChatWindow/>
    </div>
}

export default Messages