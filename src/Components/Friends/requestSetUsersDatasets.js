import {get} from "axios";

export const requestSetUsersDatasets = (itemsPerSet, currentSetOfUsers, setUsersDatasets) => {
    let apiWithoutParams = 'https://social-network.samuraijs.com/api/1.0/users'
    get(`${apiWithoutParams}?count=${itemsPerSet}&page=${currentSetOfUsers}`)
        .then(
            response => {
                // console.log(response.data)
                setUsersDatasets(response.data.items)
            })
}