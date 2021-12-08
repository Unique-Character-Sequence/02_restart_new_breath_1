import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";
import {useEffect} from 'react'
import Paginator from "./Paginator/Paginator";
import Preloader from "../../Other/Preloader";
import {Navigate} from "react-router";
import withRedirectToLoginPage from "../../HOCs/withRedirectToLoginPage";

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

    console.log(props.isUserLogged)

    return <div className={c.main}>
        <Paginator
            totalNumber={props.totalNumberOfUsers}
            itemsPerSet={props.itemsPerSet}
            selectedPage={props.currentSetOfUsers}
            setCurrentSetOfUsers={props.setCurrentSetOfUsers}
            setTotalNumberOfUsers={props.setTotalNumberOfUsers}
            requestSetUsersDatasets={props.requestSetUsersDatasets}
        />
        {props.isPageLoading ? <Preloader/> :
            <>
                {doneUsersDatasets}
            </>}
    </div>
    // FIXME: Здесь нас редиректит всегда, ведь изначально мы не считаемся авторизованными
}

export default withRedirectToLoginPage(Friends)