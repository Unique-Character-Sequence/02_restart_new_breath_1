import {
    setCurrentSetOfUsersAC, setIsLoadingAC,
    setTotalNumberOfUsersAC,
    setUsersDatasetsAC,
    switchFollowedStatusAC
} from "../Redux/friendsReducer";
import Friends from "../Components/Friends/Friends";
import {connect} from "react-redux";
import axios, {get} from "axios";

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
            let action = switchFollowedStatusAC(id)
            dispatch(action)
        },
        setCurrentSetOfUsers: (currentSetOfUsers) => {
            let action = setCurrentSetOfUsersAC(currentSetOfUsers)
            dispatch(action)
        },
        setUsersDatasets: (rawUsersDatasets) => {
            let action = setUsersDatasetsAC(rawUsersDatasets)
            dispatch(action)
        },
        setTotalNumberOfUsers: (totalCount) => {
            let action = setTotalNumberOfUsersAC(totalCount)
            dispatch(action)
        },
        requestSetUsersDatasets: (count, page) => {
            dispatch(setIsLoadingAC(true))
            // setUsersDatasets();
            let apiWithoutParams = 'https://social-network.samuraijs.com/api/1.0/users'
            get(`${apiWithoutParams}?count=${count}&page=${page}`)
                .then(
                    response => {
                        // console.log(response.data)
                        dispatch(setUsersDatasetsAC(response.data.items))
                        dispatch(setTotalNumberOfUsersAC(response.data.totalCount))
                        dispatch(setIsLoadingAC(false))
                    })
        }
    }
}

const ContainerFriends = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default ContainerFriends