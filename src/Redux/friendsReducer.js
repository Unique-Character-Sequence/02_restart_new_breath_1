let SWITCH_FOLLOWED_STATUS = 'SWITCH_FOLLOWED_STATUS'
let SET_USERS_DATASETS = 'SET_USERS_DATASETS'

let initialState = {
    // без этого всё падает.
    rawUsersDatasets: []
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_FOLLOWED_STATUS:
            return {
                ...state,
                // для каждой итерации маппинга свериваем id, и переключаем isUserFollowed
                rawUsersDatasets: state.rawUsersDatasets.map(userDataSet => {
                    if (userDataSet.id === action.id) {
                        return {...userDataSet, isUserFollowed: !userDataSet.isUserFollowed}
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
