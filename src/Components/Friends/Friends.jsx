import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";
import axios from "axios"

const Friends = (props) => {
    if (props.rawUsersDatasets.length === 0) {
        // после
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(
                response => {
                    console.log(response.data)
                    props.setUsersDatasets(response.data.items)
                })
    }

    let doneUsersDatasets = props.rawUsersDatasets.map(obj => <UserTile
        switchFollowedStatus={props.switchFollowedStatus} {...obj} />)
    return <div className={c.main}>
        {doneUsersDatasets}
    </div>
}

export default Friends