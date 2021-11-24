import clouds from "../../clouds.png";
import cutepfp from "../../cutepfp.jpg";
import classes from './Profile.module.css'
import ProfileInfoTile from "./ProfileInfoTile/ProfileInfoTile";
import ContainerProfilePostFeed from "./ProfilePostFeed/ContainerProfilePostFeed";

const Profile = (props) => {
    return <div className={classes.main}>
        <ProfileInfoTile
            name='Беброух Шлёпочелли'
            pfp={cutepfp}
            banner={clouds}
            description='Опа, прикол'
        />
        <ContainerProfilePostFeed
            dispatch={props.dispatch}
            inputValue={props.ProfilePageDatasets.inputValue}
            rawPostDatasets={props.ProfilePageDatasets.rawPostDatasets}
        />
    </div>
}

export default Profile