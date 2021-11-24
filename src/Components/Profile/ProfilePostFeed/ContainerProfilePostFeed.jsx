import ProfilePost from "./ProfilePost/ProfilePost";
import React from "react"
import {addPostAC, updatePostInputAC} from "../../../Redux/profileReducer";
import ProfilePostFeed from "./ProfilePostFeed";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        inputValue: state.ProfilePageDatasets.inputValue,
        donePosts: state.ProfilePageDatasets.rawPostDatasets
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostInput: (text) => {
            let action = updatePostInputAC(text)
            dispatch(action)
        },
        addPost: () => {
            let action = addPostAC()
            dispatch(action)
        }

    }
}

const ContainerProfilePostFeed = connect(mapStateToProps, mapDispatchToProps)(ProfilePostFeed)


export default ContainerProfilePostFeed;