import { createSelector } from "reselect";

const getUsers = (state) => {
  return state.usersPage.users;
};
//reselect fake example
export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => u);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsLoading = (state) => {
  return state.usersPage.isLoading;
};
export const getIsFollowing = (state) => {
  return state.usersPage.isFollowing;
};
