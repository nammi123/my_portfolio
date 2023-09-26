import { createContext, useReducer } from "react";
export const themeContext = createContext();

const initialState = { darkMode: false, modal: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    case "showModal":
      return { modal: true };
    case "hideModal":
      return { modal: false };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
