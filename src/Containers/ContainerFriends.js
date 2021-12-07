import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";
import {
    setCurrentSetOfUsers,setIsPageLoading,
    setTotalNumberOfUsers,
    setUsersDatasets,
    switchFollowedStatusThunk
} from "../Redux/friendsSlice";
import {getUsersApi} from "../API/samuraijsAPI";

let mapStateToProps = (state) => {
    return {
        rawUsersDatasets: state.UsersDatasets.rawUsersDatasets,
        itemsPerSet: state.UsersDatasets.itemsPerSet,
        totalNumberOfUsers: state.UsersDatasets.totalNumberOfUsers,
        currentSetOfUsers: state.UsersDatasets.currentSetOfUsers,
        isPageLoading: state.UsersDatasets.isPageLoading,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchFollowedStatus: (id, followed) => {
            dispatch(switchFollowedStatusThunk({id: id, followed: followed}))
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
            dispatch(setIsPageLoading(true))
            console.log(obj)
            getUsersApi(obj.count, obj.page)
                .then(
                    data => {
                        console.log('Friends', data)
                        dispatch(setUsersDatasets(data.items))
                        dispatch(setTotalNumberOfUsers(data.totalCount))
                        dispatch(setIsPageLoading(false))
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