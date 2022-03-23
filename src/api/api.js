import axios from 'axios'

// создаем инстанс для axios, чтобы в дальнейшем было легче использовать различные подключения
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
 })
//  instance.get('/todos')


export const getUsers = (currentPage, pageSize) => {
   return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
}

export const getProfile = (profileId) => {
    return instance.get(`profile/${profileId}`)
}

export const authMe = () => {
    return instance.get('auth/me')
}