import MessageTile from "./MessageTile/MessageTile";

let rawMsgContentDatasets = [
    {text: 'Сообщенивание 1'},
    {text: 'Сообщенивание 2'},
    {text: 'Сообщенивание 3'},
    {text: 'Сообщенивание 4'},
]

let doneMsgContentDatasets = rawMsgContentDatasets.map(obj => <MessageTile {...obj}/>)

const ChatWindow = () => {
    return <div>
        {doneMsgContentDatasets}
    </div>
}

export default ChatWindow;