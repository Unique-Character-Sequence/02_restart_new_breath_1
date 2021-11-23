import ProfilePost from "./ProfilePost/ProfilePost";
import React from "react"

const ProfilePostFeed = (props) => {
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)
    let newPostRef = React.createRef();
    let addPost = () => {
        props.dispatch({type: "ADD_POST"})
        // props.addPost();
    }
    let onInputChange = () => {
        let text = newPostRef.current.value;
        props.dispatch({type: "UPDATE_POST_INPUT", postText: text})
    }
    return <div>
        <div>
            <input type="text" ref={newPostRef} value={props.inputValue} onChange={onInputChange}/>
            <button onClick={addPost}>Post</button>
        </div>
        {donePosts}
    </div>
}

export default ProfilePostFeed;