"use client";
import { createContext, useReducer } from "react";

export const ColorContext = createContext();

const initialState = {
  buttonColor: "#f0f0f0",
  textColor: "#000000",
  backgroundImage: "",
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case "SET_BUTTON_COLOR":
      return { ...state, buttonColor: action.payload };
    case "SET_TEXT_COLOR":
      return { ...state, textColor: action.payload };
    case "SET_BACKGROUND_IMAGE":
      return { ...state, backgroundImage: action.payload };
    default:
      return state;
  }
};

const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
