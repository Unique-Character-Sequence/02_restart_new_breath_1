import Tile from "./Tile/Tile";

let rawUserTileDatasets = [
    {id: 1, name: 'Бибус Челикович'},
    {id: 2, name: 'Абобус Беброчевских'},
    {id: 3, name: 'Бибабоба Кринжов'},
    {id: 4, name: 'Бублик Бибубликовый'},
]

let doneMessages = rawUserTileDatasets.map(obj => <Tile {...obj}/>)

const ChatList = () => {
    return <div>
        {doneMessages}
    </div>
}

export default ChatList