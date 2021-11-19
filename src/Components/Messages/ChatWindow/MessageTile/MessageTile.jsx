import c from './MessageTile.module.css'

const MessageTile = (props) => {
    let messageContent = props.text

    return <div className={c.blocking}>
        <div className={props.myMsg ? c.myMsgWrapper : c.theirMsgWrapper}>
            {messageContent}
        </div>
    </div>
}

export default MessageTile