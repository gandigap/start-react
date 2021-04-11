import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'b4ff576c-5d0f-46dc-b077-f6024a55c0d0'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userid) {
    return instance.post(`follow/${userid}`)
      .then(response => response.data);
  },
  unfollow(userid) {
    return instance.delete(`follow/${userid}`)
      .then(response => response.data);
  },
  auth() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => response.data);
  },

}