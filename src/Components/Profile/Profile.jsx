import classes from './Profile.module.css'
import ProfileInfoTile from "./ProfileInfoTile/ProfileInfoTile";
import ProfilePostFeed from "./ProfilePostFeed/ProfilePostFeed";
import {useEffect} from "react";
import {useParams} from "react-router";

const Profile = (props) => {
    let idFromUrl = useParams().id

    useEffect(() => {
        console.log('componentDidMount')
        if (idFromUrl) {
            props.setUserProfile(idFromUrl)
        } else props.setUserProfile(props.userId)
        //FIXME: Данные читаются до того, как придёт ответ от сервера
    }, [])

    return <div className={classes.main}>
        <ProfileInfoTile
            {...props.userProfileDataset}
            isUserStatusInEditMode={props.isUserStatusInEditMode}
            switchIsUserStatusPending={props.switchIsUserStatusPending}
            switchUserStatusEditMode={props.switchUserStatusEditMode}
            setUserStatus={props.setUserStatus}
            updateStatus={props.updateStatus}
        />
        <ProfilePostFeed
            rawPostDatasets={props.rawPostDatasets}
            inputValue={props.inputValue}
            addPost={props.addPost}
            updatePostInput={props.updatePostInput}
        />
    </div>
}

export default Profile