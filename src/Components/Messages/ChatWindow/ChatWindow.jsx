import MessageTile from "./MessageTile/MessageTile";

const ChatWindow = (props) => {
    let doneMsgContentDatasets = props.rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)
    return <div>
        {doneMsgContentDatasets}
    </div>
}

export default ChatWindow;