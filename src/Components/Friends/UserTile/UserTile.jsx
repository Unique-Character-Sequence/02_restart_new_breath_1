import c from './UserTile.module.css'

let defaultpfp = 'https://i.pinimg.com/474x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg'

const UserTile = (props) => {
    return <div className={c.main}>
        <div>
            <img className={c.pic} src={props.photos.small ? props.photos.small : defaultpfp} alt=""/>
            <a href={props.id}>{props.name}</a>
        </div>
        <div>
            <button onClick={() => props.switchFollowedStatus(props.id)}>
                {props.friend ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    </div>
}

export default UserTile