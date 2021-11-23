import ProfilePost from "./ProfilePost/ProfilePost";
import React from "react"
import {addPostAC, updatePostInputAC} from "../../../Redux/state";

const ProfilePostFeed = (props) => {
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)
    let newPostRef = React.createRef();
    let action = addPostAC()
    let addPost = () => {
        props.dispatch(action)
        // props.addPost();
    }
    let onInputChange = () => {
        let text = newPostRef.current.value;
        let action = updatePostInputAC(text)
        props.dispatch(action)
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