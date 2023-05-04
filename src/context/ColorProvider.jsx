"use client";
import { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [buttonColor, setButtonColor] = useState("#f0f0f0");
  const [textColor, setTextColor] = useState("#000");
  const [backgroundImage, setBackgroundImage] = useState("");
  return (
    <ColorContext.Provider
      value={{
        buttonColor,
        setButtonColor,
        textColor,
        setTextColor,
        backgroundImage,
        setBackgroundImage,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
