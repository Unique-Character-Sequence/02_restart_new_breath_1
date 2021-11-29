import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";
import axios from "axios"
import {useEffect} from 'react'
import Paginator from "./Paginator/Paginator";

const Friends = (props) => {
    // TODO: Оп
    // FIXME: Можно и так записать
    useEffect(() => {
        // componentDidMount
        console.log('componentDidMount')
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(
                response => {
                    // console.log(response.data)
                    props.setUsersDatasets(response.data.items)
                })
    }, [])
    let doneUsersDatasets = props.rawUsersDatasets.map(obj => <UserTile
        switchFollowedStatus={props.switchFollowedStatus} {...obj} />)

    return <div className={c.main}>
        <Paginator
            totalNumber={props.totalNumberOfUsers}
            itemsPerSet={props.itemsPerSet}
            selectedPage={props.currentSetOfUsers}
        />
        <button onClick={() => alert('Теперь это делает useEffect&axios')}>Get Users</button>
        {doneUsersDatasets}
    </div>
}

export default Friends