import React from "react"

const ProfilePostFeed = (props) => {
    let newPostRef = React.createRef();
    let onInputChange = () => {
        let text = newPostRef.current.value;
        props.updatePostInput(text)
    }
    return <div>
        <div>
            <input type="text" ref={newPostRef} value={props.inputValue} onChange={onInputChange}/>
            <button onClick={props.addPost}>Post</button>
        </div>
        {props.donePosts}
    </div>
}

export default ProfilePostFeed;