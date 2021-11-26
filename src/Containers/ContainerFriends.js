import {setUsersDatasetsAC, switchFollowedStatusAC} from "../Redux/friendsReducer";
import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        rawUsersDatasets: state.UsersDatasets.rawUsersDatasets,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchFollowedStatus: (id) => {
            let action = switchFollowedStatusAC(id)
            dispatch(action)
        },
        setUsersDatasets: (rawUsersDatasets) => {
            let action = setUsersDatasetsAC(rawUsersDatasets)
            dispatch(action)
        },
    }
}

const ContainerFriends = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default ContainerFriends