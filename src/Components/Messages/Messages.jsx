import c from './Messages.module.css'
import ChatList from "./ChatList/ChatList";
import ContainerChatWindow from "../../Containers/ContainerChatWindow";
import {withRedirectToLoginPage} from "../../HOCs/withRedirectToLoginPage";


const Messages = (props) => {
    return <div className={c.main}>
        <ChatList rawUserTileDatasets={props.rawUserTileDatasets}/>
        <ContainerChatWindow/>
    </div>
}

export default withRedirectToLoginPage(Messages)

