import clouds from "../../clouds.png";
import cutepfp from "../../cutepfp.jpg";
import classes from './Profile.module.css'
import ProfileInfoTile from "./ProfileInfoTile/ProfileInfoTile";
import ProfilePostFeed from "./ProfilePostFeed/ProfilePostFeed";
import {useEffect} from "react";
import {useParams} from "react-router";

const Profile = (props) => {
    let idFromUrl = useParams().id

    useEffect(() => {
        console.log('componentDidMount')
        props.setUserProfile(idFromUrl)
    }, [])

    return <div className={classes.main}>
        <ProfileInfoTile {...props.userProfileDataset}
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