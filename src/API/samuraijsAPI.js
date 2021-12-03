import axios from "axios";

let config = {withCredentials: true, headers: {'API-KEY': '40ac32b5-dec9-4885-a28b-52e1934371e9'}}
let withCredentials = {withCredentials: true}
let followApiUrl = "https://social-network.samuraijs.com/api/1.0/follow"
let usersApiUrl = "https://social-network.samuraijs.com/api/1.0/users"
let profileApiUrl = "https://social-network.samuraijs.com/api/1.0/profile"


export const switchFollowedStatusAPI = (id, followedStatus) => {
    let url = `${followApiUrl}/${id}`
    if (followedStatus === true) return axios.delete(url, config).then(response => response.data)
    if (followedStatus === false) return axios.post(url, {}, config).then(response => response.data)
}

export const getUsersApi = (count, page) => axios.get(`${usersApiUrl}?count=${count}&page=${page}`, withCredentials)
    .then(response => response.data)

export const getProfileApi = (id) => axios.get(`${profileApiUrl}/${id}`).then(response => response.data)
