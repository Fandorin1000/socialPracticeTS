import { stopSubmit } from "redux-form";
import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_LOGIN_DATA = "SET_LOGIN_DATA";
const SET_LOGOUT_DATA = "SET_LOGOUT_DATA";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  password: null as string | number | null,
  login: null as string | null,
  isAuth: false,
  isLoading: false,
  rememberMe: false as boolean | null,
};

export type TInitialState = typeof initialState;

type TSetUserData = {
  type: typeof SET_USER_DATA;
  userId: number;
  email: string;
  login: string;
};

type TToggleIsLoading = {
  type: typeof TOGGLE_IS_LOADING;
  isLoading: boolean;
};

type TSetLoginData = {
  type: typeof SET_LOGIN_DATA;
  email: string;
  password: string;
  rememberMe: boolean;
  isAuth: boolean;
};

const authReducer = (state = initialState, action: any): TInitialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: true,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_LOGIN_DATA:
      return {
        ...state,
        email: action.email,
        password: action.password,
        rememberMe: action.rememberMe,
        isAuth: action.isAuth,
      };
    case SET_LOGOUT_DATA:
      return {
        ...state,
        email: null,
        password: null,
        rememberMe: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setUserData = (
  userId: number,
  email: string,
  login: string
): TSetUserData => ({
  type: SET_USER_DATA,
  userId,
  email,
  login,
});
export const toggleIsLoading = (isLoading: boolean): TToggleIsLoading => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const setLoginData = (
  email: string,
  password: string,
  rememberMe: boolean,
  isAuth: boolean
) => ({
  type: SET_LOGIN_DATA,
  email,
  password,
  rememberMe,
  isAuth,
});
export const setLogoutData = () => ({
  type: SET_LOGIN_DATA,
});

export const authMe = () => {
  return (dispatch: any) => {
    dispatch(toggleIsLoading(true));
    authAPI.authMeRequest().then((response: any) => {
      dispatch(toggleIsLoading(false));
      if (response.resultCode === 0) {
        let data = response.data;
        dispatch(setUserData(data.id, data.email, data.login));
      }
    });
  };
};
export const login = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: any) => {
    dispatch(toggleIsLoading(true));
    authAPI.loginRequest(email, password, rememberMe).then((response: any) => {
      dispatch(toggleIsLoading(false));
      if (response.data.resultCode === 0) {
        dispatch(setLoginData(email, password, rememberMe, true));
        dispatch(authMe());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "ERROR";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};
export const logout = () => {
  return (dispatch: any) => {
    dispatch(toggleIsLoading(true));
    authAPI.logoutRequest().then((response: any) => {
      console.log(response.data);
      dispatch(toggleIsLoading(false));
      if (response.data.resultCode === 0) {
        dispatch(setLogoutData());
        dispatch(authMe());
      }
    });
  };
};

export default authReducer;
