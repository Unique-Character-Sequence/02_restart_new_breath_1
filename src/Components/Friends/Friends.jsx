import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";
import axios from "axios"
import {useEffect} from 'react'

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


    //TODO: [start] Это нужно вынесит в отдельную функцию
    let Paginator = (totalNumber, itemsPerSet, selectedPage) => {
        let numberOfPages = totalNumber / itemsPerSet
        let listOfPagesNumbers = []
        for (let i = 1; i <= numberOfPages; i++) {
            // console.log(`i = ${i}`);
            listOfPagesNumbers.push(i)
        }

        listOfPagesNumbers.map(pageNumber => <span className={c.selectedPage}>{pageNumber}</span>)
        console.log(c.selectedPage);
        return listOfPagesNumbers
    }
    //TODO: [end]

    let mapped ;

    return <div className={c.main}>
        {Paginator(props.totalNumberOfUsers, props.itemsPerSet)}
        <button onClick={() => alert('Теперь это делает useEffect&axios')}>Get Users</button>
        {doneUsersDatasets}
    </div>
}

export default Friends