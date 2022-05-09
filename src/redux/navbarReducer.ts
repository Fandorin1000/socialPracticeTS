export type TInitialState = typeof initialState;

type TLinks = {
  id: number;
  to: string;
  name: string;
};
let initialState = {
  links: [
    { id: 1, to: "/profile", name: "profile" },
    { id: 2, to: "/dialogs", name: "dialogs" },
    { id: 3, to: "/users", name: "users" },
    { id: 4, to: "/news", name: "news" },
    { id: 5, to: "/music", name: "music" },
    { id: 6, to: "/settings", name: "settings" },
  ] as TLinks[],
};

const navbarReducer = (state = initialState, action: any) => {
  return state;
};

export default navbarReducer;
