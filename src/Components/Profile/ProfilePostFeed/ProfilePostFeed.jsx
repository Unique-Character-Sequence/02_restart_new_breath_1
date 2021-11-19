import ProfilePost from "./ProfilePost/ProfilePost";

const ProfilePostFeed = (props) => {
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)

    return <div>
        <div>
            <input type="text"/>
            <button>Post</button>
        </div>
        {donePosts}
    </div>
}

export default ProfilePostFeed;