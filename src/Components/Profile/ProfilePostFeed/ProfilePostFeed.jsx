import ProfilePost from "./ProfilePost/ProfilePost";
import React from "react"

const ProfilePostFeed = (props) => {
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)
    let newPostRef = React.createRef();
    let addPost = () => {
        let text = newPostRef.current.value;
        props.addPost(text);
    }
    return <div>
        <div>
            <input ref={newPostRef}  type="text"/>
            <button onClick={addPost}>Post</button>
        </div>
        {donePosts}
    </div>
}

export default ProfilePostFeed;