import React from "react"
import ProfilePost from "./ProfilePost/ProfilePost";

const ProfilePostFeed = (props) => {
    let newPostRef = React.createRef();
    let onInputChange = () => {
        let text = newPostRef.current.value;
        props.updatePostInput(text)
    }
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)
    return <div>
        <div>
            <input type="text" ref={newPostRef} value={props.inputValue} onChange={onInputChange}/>
            <button onClick={props.addPost}>Post</button>
        </div>
        {donePosts}
    </div>
}

export default ProfilePostFeed;