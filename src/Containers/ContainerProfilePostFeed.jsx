import React from "react"
import ProfilePostFeed from "../Components/Profile/ProfilePostFeed/ProfilePostFeed";
import {connect} from "react-redux";
import {addPost, updatePostInput} from "../Redux/profileSlice";

let mapStateToProps = (state) => {
    return {
        inputValue: state.ProfilePageDatasets.inputValue,
        rawPostDatasets: state.ProfilePageDatasets.rawPostDatasets
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostInput: (text) => {
            let action = updatePostInput(text)
            dispatch(action)
        },
        addPost: () => {
            let action = addPost()
            dispatch(action)
        }
    }
}

const ContainerProfilePostFeed = connect(mapStateToProps, mapDispatchToProps)(ProfilePostFeed)


export default ContainerProfilePostFeed;