import c from './Messages.module.css'
import ChatList from "./ChatList/ChatList";
import ChatWindow from "./ChatWindow/ChatWindow";

const Messages = () => {
    return <div className={c.main}>
        <ChatList/>
        <ChatWindow/>
    </div>
}

export default Messages