import { usersAPI } from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  isFollowing: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        isFollowing: action.isLoading
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
export const toggleIsFollowing = (isLoading, userId) => ({
  type: TOGGLE_IS_FOLLOWING,
  isLoading,
  userId,
});

export const getUsersStart = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleIsLoading(false));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.follow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.unfollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};

export default usersReducer;
