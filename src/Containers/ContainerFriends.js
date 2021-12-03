import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";
import {get, post} from "axios";
import {
    setCurrentSetOfUsers, setIsLoading,
    setTotalNumberOfUsers,
    setUsersDatasets,
    switchFollowedStatus
} from "../Redux/friendsSlice";
import axios from "axios";

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
            let config = {withCredentials: true, headers: {'API-KEY': '40ac32b5-dec9-4885-a28b-52e1934371e9'}}
            let apiURL = `https://social-network.samuraijs.com/api/1.0/follow/${id}`
            if (followed === true) {
                axios.delete(apiURL, config)
                    .then(response => {
                        console.log('switchFollowedStatus response.data', response.data)
                        if (response.data.resultCode === 0) {
                            debugger
                            dispatch(switchFollowedStatus(id))
                        } else {
                            alert(response.data.messages)
                        }
                    })
            }
            if (followed === false) {
                post(apiURL, {}, config)
                    .then(response => {
                        console.log('switchFollowedStatus response.data', response.data)
                        if (response.data.resultCode === 0) {
                            dispatch(switchFollowedStatus(id))
                        } else {
                            alert(response.data.messages)
                        }
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
            // setUsersDatasets();
            console.log(obj)
            let apiWithoutParams = 'https://social-network.samuraijs.com/api/1.0/users'
            get(`${apiWithoutParams}?count=${obj.count}&page=${obj.page}`, {withCredentials: true})
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