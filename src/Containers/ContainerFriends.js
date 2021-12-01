
import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";
import {get} from "axios";
import {
    setCurrentSetOfUsers, setIsLoading,
    setTotalNumberOfUsers,
    setUsersDatasets,
    switchFollowedStatus
} from "../Redux/friendsSlice";

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
        switchFollowedStatus: (id) => {
            let action = switchFollowedStatus(id)
            dispatch(action)
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
            // setUsersDatasets();
            console.log(obj)
            let apiWithoutParams = 'https://social-network.samuraijs.com/api/1.0/users'
            get(`${apiWithoutParams}?count=${obj.count}&page=${obj.page}`)
                .then(
                    response => {
                        // console.log(response.data)
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