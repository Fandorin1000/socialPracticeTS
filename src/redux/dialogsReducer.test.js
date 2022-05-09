import dialogsReducer,{sendMessage} from "./dialogsReducer";


let state = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "I am Fine" },
  ],
};
it("increment length messages after added newMessage", () => {
  let action = sendMessage("hello");
  dialogsReducer(state, action);
  expect(state.messages.length).toBe(3)
})


