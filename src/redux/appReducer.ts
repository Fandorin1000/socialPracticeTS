import { Action } from "redux";
import { authMe } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type TInitialState = {
  initialized: boolean;
};

type TInitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS;
};
let initialState: TInitialState = {
  initialized: false,
};
const appReducer = (state = initialState, action: Action): TInitialState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = (): TInitializedSuccess => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeStart = () => {
  return (dispatch: any) => {
    let authMeResult = dispatch(authMe());
    Promise.all([authMeResult]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
