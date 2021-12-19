import classes from './Profile.module.css'
import ProfileInfoTile from "./ProfileInfoTile/ProfileInfoTile";
import ProfilePostFeed from "./ProfilePostFeed/ProfilePostFeed";
import {useEffect} from "react";
import {useParams} from "react-router";
import Preloader from "../../Other/Preloader";

const Profile = (props) => {
    let idFromUrl = useParams().id

    useEffect(() => {
        console.log('componentDidMount')
        if (idFromUrl) {
            props.setUserProfile(idFromUrl)
        } else if (props.userCredentials) {
            props.setUserProfile(props.userCredentials.id)
        }
    }, [])
    useEffect(() => {
        if (props.userCredentials) {
            props.setUserProfile(props.userCredentials.id)
        }
    }, [props.userCredentials])


    if (props.userCredentials) {
        return <div className={classes.main}>
            <ProfileInfoTile
                {...props.userProfileDataset}
                isUserStatusInEditMode={props.isUserStatusInEditMode}
                switchUserStatusEditMode={props.switchUserStatusEditMode}
                userStatusPromiseState={props.userStatusPromiseState}
                updateStatus={props.updateStatus}
            />
            <ProfilePostFeed
                rawPostDatasets={props.rawPostDatasets}
                inputValue={props.inputValue}
                addPost={props.addPost}
                updatePostInput={props.updatePostInput}
            />
        </div>
    } else return <Preloader/>
}

export default Profile