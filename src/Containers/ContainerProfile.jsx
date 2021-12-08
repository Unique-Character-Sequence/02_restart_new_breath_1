import {connect} from "react-redux";
import {addPost, setUserProfile, setUserProfileThunk, updatePostInput} from "../Redux/profileSlice";
import Profile from "../Components/Profile/Profile";
import {getProfileApi} from "../API/samuraijsAPI";

let mapStateToProps = (state) => {
    return {
        inputValue: state.ProfilePageDatasets.inputValue,
        rawPostDatasets: state.ProfilePageDatasets.rawPostDatasets,
        userProfileDataset: state.ProfilePageDatasets.userProfileDataset,
        // FIXME: userId: state.AuthData.userCredentials.userId
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
        }
    }
}


const ContainerProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ContainerProfile;