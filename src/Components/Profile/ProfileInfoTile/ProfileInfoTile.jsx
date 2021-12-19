import c from "../Profile.module.css";
import defaultImage from "./no_image_available.png"
import StatusField from "./StatusField/StatusField";


const ProfileInfoTile = (props) => {
    let availableProfilePhoto = () => {
        if (props.photos && props.photos.large) {
            return props.photos.large
        } else return defaultImage
    }

    return <div>
        <div>
            <img className={c.pfp} src={availableProfilePhoto()} alt=""/>
        </div>
        <div className={c.name}>
            {props.fullName}
        </div>
        <div>
            <StatusField
                status={props.status}
                updateStatus={props.updateStatus}
                isUserStatusInEditMode={props.isUserStatusInEditMode}
                switchUserStatusEditMode={props.switchUserStatusEditMode}
                switchIsUserStatusPending={props.switchIsUserStatusPending}
                isUserStatusPending={props.isUserStatusPending}/>
        </div>
        <div>
            JobDesc: {props.lookingForAJobDescription}
        </div>
        <div>
            Ищу работу: {props.lookingForAJob}
        </div>
    </div>
}

export default ProfileInfoTile;