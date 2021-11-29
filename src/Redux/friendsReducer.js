let SWITCH_FOLLOWED_STATUS = 'SWITCH_FOLLOWED_STATUS'
let SET_USERS_DATASETS = 'SET_USERS_DATASETS'

let initialState = {
    // без этого всё падает.
    rawUsersDatasets: [],
    itemsPerSet: 5,
    totalNumberOfUsers: 100,
    currentSetOfUsers: 1 // Пользователи считают с единицы, поэтому с 1 и начинаем
    // TODO: Пофиксить эти захардкоденные данные
}

export const friendsReducer = (state = initialState, action) => {
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
            return {...state, rawUsersDatasets: [...state.rawUsersDatasets, ...action.rawUsersDatasets]}
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
