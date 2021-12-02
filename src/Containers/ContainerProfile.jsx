import React from "react"
import {connect} from "react-redux";
import {addPost, setUserProfile, updatePostInput} from "../Redux/profileSlice";
import Profile from "../Components/Profile/Profile";
import {get} from "axios";

let mapStateToProps = (state) => {
    return {
        inputValue: state.ProfilePageDatasets.inputValue,
        rawPostDatasets: state.ProfilePageDatasets.rawPostDatasets,
        userProfileDataset: state.ProfilePageDatasets.userProfileDataset
    }
}
//TODO: Запрашивать данные надо в зависимости от url `/profile/${props.id}`
//TODO: createAction reduxToolkit зачекать

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
            let apiWithoutParams = 'https://social-network.samuraijs.com/api/1.0/profile'
            if (id !== "") {
                // FIXME: Когда наш Profile будет приходить с сервера if будет не нужен
                get(`${apiWithoutParams}/${id}`)
                    .then(response => {
                            dispatch(setUserProfile(response.data))
                            console.log('response.data:', response.data);
                        }
                    )
            }
        }
    }
}


const ContainerProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ContainerProfile;