import ProfilePost from "./ProfilePost/ProfilePost";
import React from "react"
import {addPostAC, updatePostInputAC} from "../../../Redux/profileReducer";
import ProfilePostFeed from "./ProfilePostFeed";

const ContainerProfilePostFeed = (props) => {
    let donePosts = props.rawPostDatasets.map(obj => <ProfilePost {...obj}/>)
    let addPost = () => {
        let action = addPostAC()
        props.dispatch(action)
    }
    let updatePostInput = (text) => {
        let action = updatePostInputAC(text)
        props.dispatch(action)
    }
    return <ProfilePostFeed
        addPost={addPost}
        donePosts={donePosts}
        inputValue={props.inputValue}
        updatePostInput={updatePostInput}/>
}

export default ContainerProfilePostFeed;