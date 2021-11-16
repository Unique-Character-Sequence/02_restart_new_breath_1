import clouds from "../../clouds.png";
import cutepfp from "../../cutepfp.jpg";
import classes from './Profile.module.css'
import Profile__posts from "./Profile__posts/Profile__postFeed";

const Profile = () => {
    return <div className={classes.main}>
        <div>
            <img className={classes.banner} src={clouds} alt=""/>
        </div>
        <div>
            <img className={classes.pfp} src={cutepfp} alt=""/>
            Pfp + description
        </div>
        <Profile__posts/>
    </div>
}

export default Profile