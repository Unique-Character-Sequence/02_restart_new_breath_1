import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";
import axios from "axios"
import {useEffect} from 'react'
import Paginator from "./Paginator/Paginator";
import Preloader from "../../Other/Preloader";


const Friends = (props) => {
    // TODO: Оп
    // FIXME: Можно и так записать
    useEffect(() => {
        // componentDidMount
        console.log('componentDidMount')
        props.requestSetUsersDatasets({count: props.itemsPerSet, page: props.currentSetOfUsers})
    }, [])

    let doneUsersDatasets = props.rawUsersDatasets.map(obj => <UserTile
        switchFollowedStatus={props.switchFollowedStatus} {...obj} />)

    return <div className={c.main}>
        <Paginator
            totalNumber={props.totalNumberOfUsers}
            itemsPerSet={props.itemsPerSet}
            selectedPage={props.currentSetOfUsers}
            setUsersDatasets={props.setUsersDatasets}
            setCurrentSetOfUsers={props.setCurrentSetOfUsers}
            setTotalNumberOfUsers={props.setTotalNumberOfUsers}
            requestSetUsersDatasets={props.requestSetUsersDatasets}
        />
        {props.isLoading ? <Preloader/> :
            <>
                <button onClick={() => alert('Теперь это делает useEffect&axios')}>Get Users</button>
                {doneUsersDatasets}
            </>}
    </div>

}

export default Friends