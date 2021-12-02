import c from "../Profile.module.css";
import defaultImage from "./no_image_available.png"


const ProfileInfoTile = (props) => {
    let availableProfilePhoto = () => {
        if (props.photos && props.photos.large) {
            return props.photos.large
        } else return defaultImage
    }

    return <div>
        {/*<div>*/}
        {/*    <img className={c.banner} src={props.banner} alt=""/>*/}
        {/*</div>*/}
        <div>
            <img className={c.pfp} src={availableProfilePhoto()} alt=""/>
        </div>
        <div className={c.name}>
            {props.fullName}
        </div>
        <div>
            Status: {props.aboutMe}
            <br/>
            JobDesc: {props.lookingForAJobDescription}
        </div>
        <div>
            Ищу работу: {props.lookingForAJob}
        </div>
    </div>
}

export default ProfileInfoTile;