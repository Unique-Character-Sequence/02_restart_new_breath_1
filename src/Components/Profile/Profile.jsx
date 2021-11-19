import clouds from "../../clouds.png";
import cutepfp from "../../cutepfp.jpg";
import classes from './Profile.module.css'
import ProfilePostFeed from "./ProfilePostFeed/ProfilePostFeed";
import ProfileInfoTile from "./ProfileInfoTile/ProfileInfoTile";

const Profile = (props) => {
    return <div className={classes.main}>
        <ProfileInfoTile
            name='Беброух Шлёпочелли'
            pfp = {cutepfp}
            banner = {clouds}
            description='Опа, прикол'
        />
        <ProfilePostFeed rawPostDatasets={props.rawPostDatasets}/>
    </div>
}

export default Profile