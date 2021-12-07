import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    // headers: {'API-KEY': '40ac32b5-dec9-4885-a28b-52e1934371e9'},
    headers: {'API-KEY': 'ccc2bd36-fa6e-4617-87db-d75ca1fcabcb'},
    withCredentials: true
})

export const switchFollowedStatusAPI = (id, followedStatus) => {
    let url = `follow/${id}`
    if (followedStatus === true) return axiosInstance.delete(url).then(response => response.data)
    if (followedStatus === false) return axiosInstance.post(url).then(response => response.data)
}

export const getUsersApi = (count, page) => axiosInstance.get(`users?count=${count}&page=${page}`)
    .then(response => response.data)

export const getProfileApi = (id) => axiosInstance.get(`profile/${id}`).then(response => response.data)
