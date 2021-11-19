import c from './MessageTile.module.css'

const MessageTile = (props) => {
    let messageContent = props.text

    return <div className={props.myMsg ? c.myMsgWrapper : c.theirMsgWrapper}>
        {messageContent}
    </div>
}

export default MessageTile