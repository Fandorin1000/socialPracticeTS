import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: { "API-KEY": "b4f984b3-0451-4543-a997-528d924670e3" },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`/follow/${userId}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfileRequest(userId) {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },
  getStatusRequest(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatusRequest(status) {
    return instance.put(`/profile/status`, { status: status });
  },
};

export const authAPI = {
  authMeRequest() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
  loginRequest(email, password, rememberMe) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
  },
  logoutRequest() {
    return instance.delete(`/auth/login`);
  },
};
