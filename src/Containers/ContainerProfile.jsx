import {connect} from "react-redux";
import {
    addPost,
    setUserProfileThunk,
    switchUserStatusEditMode,
    updatePostInput, updateStatusThunk
} from "../Redux/profileSlice";
import Profile from "../Components/Profile/Profile";

let mapStateToProps = (state) => {
    return {
        inputValue: state.ProfilePageDatasets.inputValue,
        rawPostDatasets: state.ProfilePageDatasets.rawPostDatasets,
        userProfileDataset: state.ProfilePageDatasets.userProfileDataset,
        userId: state.AuthData.userCredentials.id,
        userStatusPromiseState: state.ProfilePageDatasets.userStatusPromiseState,
        isUserStatusInEditMode: state.ProfilePageDatasets.isUserStatusInEditMode,
    }
}
//TODO: Запрашивать данные надо в зависимости от url `/profile/${props.id}`

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostInput: (text) => {
            let action = updatePostInput(text)
            dispatch(action)
        },
        addPost: () => {
            let action = addPost()
            dispatch(action)
        },
        setUserProfile: (id) => {
            if (id !== "") {
                // FIXME: Когда наш Profile будет приходить с сервера if будет не нужен
                dispatch(setUserProfileThunk(id))
            }
        },
        switchUserStatusEditMode: () => {
            dispatch(switchUserStatusEditMode())
        },
        updateStatus: (status) => {
            dispatch(updateStatusThunk(status))
        }
    }
}


const ContainerProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ContainerProfile;