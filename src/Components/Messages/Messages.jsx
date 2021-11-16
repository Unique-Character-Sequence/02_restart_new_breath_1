import c from './Messages.module.css'
import Messages_chatList from "./Messages_chatList/Messages_chatList";
import Messages_chatWindow from "./Messages_chatWindow/Messages_chatWindow";

const Messages = () => {
    return <div className={c.main}>
        <Messages_chatList/>
        <Messages_chatWindow/>
    </div>
}

export default Messages