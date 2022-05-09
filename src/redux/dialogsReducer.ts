const SEND_MESSAGE = "SEND-MESSAGE";

export type TInitialState = typeof initialState;

type TDialogs = {
  id: number;
  name: string;
};
type TMessages = {
  id: number;
  message: string;
};

type TSendMessage = {
  type: typeof SEND_MESSAGE;
  message: string;
};
let initialState = {
  dialogs: [
    { id: 1, name: "Denis" },
    { id: 2, name: "Tolyan" },
    { id: 3, name: "Fill" },
  ] as TDialogs[],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "I am Fine" },
  ] as TMessages[],
};

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.message }],
      };
    default:
      return state;
  }
};

export const sendMessage = (message: string): TSendMessage => ({
  type: SEND_MESSAGE,
  message,
});
export default dialogsReducer;
