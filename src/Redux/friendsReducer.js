let SWITCH_FOLLOWED_STATUS = 'SWITCH_FOLLOWED_STATUS'
let SET_USERS_DATASETS = 'SET_USERS_DATASETS'
let SET_CURRENT_SET_OF_USERS = 'SET_CURRENT_SET_OF_USERS'
let SET_TOTAL_NUMBER_OF_USERS = 'SET_TOTAL_NUMBER_OF_USERS'
let SET_IS_LOADING = 'SET_IS_LOADING'


let initialState = {
    // без этого всё падает.
    rawUsersDatasets: [],
    itemsPerSet: 5,
    totalNumberOfUsers: 0,
    currentSetOfUsers: 1 // Пользователи считают с единицы, поэтому с 1 и начинаем
    // TODO: Пофиксить эти захардкоденные данные
}

export const friendsReducer = (state = initialState, action) => {
    //TODO: Заменить на createSlice из Redux-toolkit
    switch (action.type) {
        case SWITCH_FOLLOWED_STATUS:
            return {
                ...state,
                // для каждой итерации маппинга свериваем id, и переключаем friend
                rawUsersDatasets: state.rawUsersDatasets.map(userDataSet => {
                    if (userDataSet.id === action.id) {
                        return {...userDataSet, friend: !userDataSet.friend}
                    } else return userDataSet
                })
            }
        case SET_USERS_DATASETS:
            return {...state, rawUsersDatasets: [...action.rawUsersDatasets]}
        case SET_CURRENT_SET_OF_USERS:
            return {...state, currentSetOfUsers: action.currentSetOfUsers}
        case SET_TOTAL_NUMBER_OF_USERS:
            return {...state, totalNumberOfUsers: action.totalNumberOfUsers}
        case SET_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const switchFollowedStatusAC = (id) => {
    return {
        type: SWITCH_FOLLOWED_STATUS,
        id: id
    }
}

export const setUsersDatasetsAC = (rawUsersDatasets) => {
    return {
        type: SET_USERS_DATASETS,
        rawUsersDatasets: rawUsersDatasets
    }
}

export const setCurrentSetOfUsersAC = (currentSetOfUsers) => {
    return {
        type: SET_CURRENT_SET_OF_USERS,
        currentSetOfUsers: currentSetOfUsers
    }
}


export const setTotalNumberOfUsersAC = (totalNumberOfUsers) => {
    return {
        type: SET_TOTAL_NUMBER_OF_USERS,
        totalNumberOfUsers: totalNumberOfUsers
    }
}

export const setIsLoadingAC = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        isLoading: isLoading
    }
}
