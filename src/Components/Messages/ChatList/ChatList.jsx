import Tile from "./Tile/Tile";


const ChatList = (props) => {
    let doneMessages = props.rawUserTileDatasets.map(obj => <Tile {...obj}/>)

    return <div>
        {doneMessages}
    </div>
}

export default ChatList