import {setCurrentSetOfUsersAC, setUsersDatasetsAC, switchFollowedStatusAC} from "../Redux/friendsReducer";
import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";
import axios from "axios";

let mapStateToProps = (state) => {
    return {
        rawUsersDatasets: state.UsersDatasets.rawUsersDatasets,
        itemsPerSet: state.UsersDatasets.itemsPerSet,
        totalNumberOfUsers: state.UsersDatasets.totalNumberOfUsers,
        currentSetOfUsers: state.UsersDatasets.currentSetOfUsers,
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
        setCurrentSetOfUsers: (currentSetOfUsers) => {
            let action = setCurrentSetOfUsersAC(currentSetOfUsers)
            dispatch(action)
        },
    }
}

const ContainerFriends = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default ContainerFriends