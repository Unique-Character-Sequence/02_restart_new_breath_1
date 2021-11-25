import c from './UserTile.module.css'

const UserTile = (props) => {
    return <div className={c.main}>
        <div>
            User Pic
        </div>
        <div>
            <a href="Linkfromprops">{props.name}</a>
        </div>
        <div>
            <button onClick={() => props.switchFollowedStatus(props.id)}>
                {props.isUserFollowed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    </div>
}

export default UserTile