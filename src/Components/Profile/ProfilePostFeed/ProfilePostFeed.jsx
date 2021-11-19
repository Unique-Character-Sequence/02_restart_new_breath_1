import ProfilePost from "./ProfilePost/ProfilePost";

const ProfilePostFeed = (props) => {
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)

    return <div>
        {donePosts}
    </div>
}

export default ProfilePostFeed;