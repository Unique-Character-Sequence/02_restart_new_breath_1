import axios from "axios";

let config = {withCredentials: true, headers: {'API-KEY': '40ac32b5-dec9-4885-a28b-52e1934371e9'}}
let withCredentials = {withCredentials: true}
let followApiUrl = "https://social-network.samuraijs.com/api/1.0/follow"
let usersApiUrl = "https://social-network.samuraijs.com/api/1.0/users"
let profileApiUrl = "https://social-network.samuraijs.com/api/1.0/profile"


export const switchFollowedStatusAPI = (id, followedStatus) => {
    let url = `${followApiUrl}/${id}`
    if (followedStatus === true) return axios.delete(url, config)
    if (followedStatus === false) return axios.post(url, {}, config)
}

export const getUsersApi = (count, page) => axios.get(`${usersApiUrl}?count=${count}&page=${page}`, withCredentials)

export const getProfileApi = (id) => axios.get(`${profileApiUrl}/${id}`)
