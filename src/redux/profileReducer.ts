import { profileAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_ID = "SET_USER_ID";
const SET_STATUS = "SET_STATUS";

export type TInitialState = typeof initialState;

type TPosts = {
  id: number;
  imgSrc: string;
  message: string;
  likes: string;
};
let initialState = {
  posts: [
    {
      id: 1,
      imgSrc:
        "https://cdn-icons.flaticon.com/png/512/1078/premium/1078403.png?token=exp=1647270607~hmac=e6310c7a2070be45057d496e69ae0436",
      message: "hello",
      likes: "17",
    },
    {
      id: 2,
      imgSrc:
        "https://cdn-icons.flaticon.com/png/512/1078/premium/1078403.png?token=exp=1647270607~hmac=e6310c7a2070be45057d496e69ae0436",
      message: "How are you",
      likes: "27",
    },
    {
      id: 3,
      imgSrc:
        "https://cdn-icons.flaticon.com/png/512/1078/premium/1078403.png?token=exp=1647270607~hmac=e6310c7a2070be45057d496e69ae0436",
      message: "fine",
      likes: "37",
    },
  ] as TPosts[],
  profile: null as Object | null,
  userId: 5643 as number,
  status: "" as string | null,
};
const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            imgSrc:
              "https://cdn-icons.flaticon.com/png/512/1078/premium/1078403.png?token=exp=1647270607~hmac=e6310c7a2070be45057d496e69ae0436",
            message: action.newPostText,
            likes: "0",
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};
type TAddPost = {
  type: typeof ADD_POST;
  newPostText: string;
};

type TSetUserProfile = {
  type: typeof SET_USER_PROFILE;
  profile: TProfile;
};
type TProfile = {
  //   aboutMe: string
  // contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null, …}
  // fullName: "IronMan"
  // lookingForAJob: false
  // lookingForAJobDescription: null
  // photos: {small: null, large: null}
  // userId: 5643
};
type TUserContacts = {
  //   facebook: null
  // github: null
  // instagram: null
  // mainLink: null
  // twitter: null
  // vk: null
  // website: null
  // youtube: null
  // [[Prototype]]: Object
  // fullName: "IronMan"
  // lookingForAJob: false
  // lookingForAJobDescription: null
};
export const addPost = (newPostText: string): TAddPost => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile: any) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserId = (userId: any) => ({
  type: SET_USER_ID,
  userId,
});
export const setStatus = (status: any) => ({
  type: SET_STATUS,
  status,
});

export const getProfile = (userId: any) => {
  return (dispatch: any) => {
    profileAPI.getProfileRequest(userId).then((response: any) => {
      return dispatch(setUserProfile(response));
    });
  };
};

export const getStatus = (userId: any) => {
  return (dispatch: any) => {
    profileAPI.getStatusRequest(userId).then((response: any) => {
      if (response.status === 200) {
        dispatch(setStatus(response.data));
      }
    });
  };
};
export const updateStatus = (status: any) => {
  return (dispatch: any) => {
    profileAPI.updateStatusRequest(status).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
