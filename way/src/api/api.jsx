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
  getProfile(userId) {
    console.warn('Obsolete method/ Please profileApi')
    return profileAPI.getProfile(userId);
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
      .then(response => response.data);
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  }

}