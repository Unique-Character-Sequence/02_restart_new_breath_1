import c from "../Profile.module.css";

const ProfileInfoTile = (props) => {
    return <div>
        <div>
            <img className={c.banner} src={props.banner} alt=""/>
        </div>
        <div>
            <img className={c.pfp} src={props.pfp} alt=""/>
        </div>
        <div>
            {props.name}
        </div>
        <div>
            {props.description}
        </div>
    </div>
}

export default ProfileInfoTile;