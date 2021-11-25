import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";

const Friends = (props) => {
    let doneUsersDatasets = props.rawUsersDatasets.map(obj => <UserTile
        switchFollowedStatus={props.switchFollowedStatus} {...obj} />)
    return <div className={c.main}>
        {doneUsersDatasets}
    </div>
}

export default Friends