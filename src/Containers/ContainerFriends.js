import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";
import {
    setCurrentSetOfUsers, setIsLoading,
    setTotalNumberOfUsers,
    setUsersDatasets,
    switchFollowedStatus
} from "../Redux/friendsSlice";
import {getUsersApi, switchFollowedStatusAPI} from "../API/samuraijsAPI";

let mapStateToProps = (state) => {
    return {
        rawUsersDatasets: state.UsersDatasets.rawUsersDatasets,
        itemsPerSet: state.UsersDatasets.itemsPerSet,
        totalNumberOfUsers: state.UsersDatasets.totalNumberOfUsers,
        currentSetOfUsers: state.UsersDatasets.currentSetOfUsers,
        isLoading: state.UsersDatasets.isLoading,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchFollowedStatus: (id, followed) => {
            //TODO: post request result => then
            if (followed === true) {
                switchFollowedStatusAPI(id, followed)
                    .then(response => {
                        console.log('switchFollowedStatus response.data', response.data)
                        response.data.resultCode === 0 ?
                            dispatch(switchFollowedStatus(id)) :
                            alert(response.data.messages)
                    })
            }
            if (followed === false) {
                switchFollowedStatusAPI(id, followed)
                    .then(response => {
                        console.log('switchFollowedStatus response.data', response.data)
                        response.data.resultCode === 0 ?
                            dispatch(switchFollowedStatus(id)) :
                            alert(response.data.messages)
                    })
            }
        },
        setCurrentSetOfUsers: (currentSetOfUsers) => {
            let action = setCurrentSetOfUsers(currentSetOfUsers)
            dispatch(action)
        },
        setUsersDatasets: (rawUsersDatasets) => {
            let action = setUsersDatasets(rawUsersDatasets)
            dispatch(action)
        },
        setTotalNumberOfUsers: (totalCount) => {
            let action = setTotalNumberOfUsers(totalCount)
            dispatch(action)
        },
        requestSetUsersDatasets: (obj) => {
            dispatch(setIsLoading(true))
            console.log(obj)
            getUsersApi(obj.count, obj.page)
                .then(
                    response => {
                        console.log('Friends', response.data)
                        dispatch(setUsersDatasets(response.data.items))
                        dispatch(setTotalNumberOfUsers(response.data.totalCount))
                        dispatch(setIsLoading(false))
                    })
        }
    }
}

// let mDTP = {
//     switchFollowedStatus,
//     setCurrentSetOfUsers,
//     setUsersDatasets,
//     setTotalNumberOfUsers,
//     requestSetUsersDatasets
// }

const ContainerFriends = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default ContainerFriends