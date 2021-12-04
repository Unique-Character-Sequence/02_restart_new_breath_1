import c from './UserTile.module.css'
import {NavLink} from "react-router-dom";

let defaultpfp = 'https://i.pinimg.com/474x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg'

const UserTile = (props) => {
    return <div className={c.main}>
        <div>
            <img className={c.pic} src={props.photos.small ? props.photos.small : defaultpfp} alt=""/>
            <NavLink to={`/profile/${props.id}`}>{props.name}</NavLink>
            <div>Status: {props.status}</div>
        </div>
        <div>
            <button disabled={props.isFollowingPending}
                onClick={() => props.switchFollowedStatus(props.id, props.followed)}>
                {props.followed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    </div>
}

export default UserTile