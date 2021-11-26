import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";
import axios from "axios"
import {useEffect} from 'react'

const Friends = (props) => {
    let getUsers = () => {
        // TODO: Оп
        // FIXME: Можно и так записать
    }
    useEffect(() => {
        // componentDidMount
        console.log('componentDidMount')
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(
                response => {
                    console.log(response.data)
                    props.setUsersDatasets(response.data.items)
                })
    }, [])
    let doneUsersDatasets = props.rawUsersDatasets.map(obj => <UserTile
        switchFollowedStatus={props.switchFollowedStatus} {...obj} />)
    return <div className={c.main}>
        <button onClick={getUsers}>Get Users</button>
        {doneUsersDatasets}
    </div>
}

export default Friends