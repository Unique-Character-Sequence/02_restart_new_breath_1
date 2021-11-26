import c from './Friends.module.css'
import UserTile from "./UserTile/UserTile";

const Friends = (props) => {
    if (props.rawUsersDatasets.length === 0) {
        props.setUsersDatasets([
            {id: 1, name: "Жмых Андреев", isUserFollowed: false, isFriend: false},
            {id: 2, name: "Нежмых Сергеев", isUserFollowed: false, isFriend: false},
            {id: 3, name: "Жмых Михайлов", isUserFollowed: false, isFriend: false},
            {id: 4, name: "Нежмых Гребнев", isUserFollowed: false, isFriend: false},
            {id: 5, name: "Жмых Лебедев", isUserFollowed: false, isFriend: false},
            {id: 6, name: "Жмых Златаев", isUserFollowed: false, isFriend: false},
        ])
    }

    let doneUsersDatasets = props.rawUsersDatasets.map(obj => <UserTile
        switchFollowedStatus={props.switchFollowedStatus} {...obj} />)
    return <div className={c.main}>
        {doneUsersDatasets}
    </div>
}

export default Friends