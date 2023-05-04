"use client";
import { ColorContext } from "@/context/ColorProvider";
import { useContext, useRef } from "react";

const ColorMenu = () => {
  const {
    buttonColor,
    setButtonColor,
    textColor,
    setTextColor,
    backgroundImage,
    setBackgroundImage,
  } = useContext(ColorContext);

  const buttonColorInputRef = useRef();
  const buttonTextInputRef = useRef();
  const handleButtonClickColor = () => {
    buttonColorInputRef.current.click();
  };

  const handleTextClickColor = () => {
    buttonTextInputRef.current.click();
  };
  return (
    <div className="flex flex-col border-2 rounded-md p-2 max-w-sm">
      <form className="">
        <div className="flex justify-around">
          <div className="flex">
            <label htmlFor="buttonColor">botón: </label>
            <div
              className="w-6 h-6 ml-2 rounded-full border-2 border-gray-300 cursor-pointer"
              style={{ backgroundColor: buttonColor }}
              onClick={handleButtonClickColor}
            />
            <input
              ref={buttonColorInputRef}
              type="color"
              id="buttonColor"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              hidden
            />
          </div>
          <div className="flex">
            <label htmlFor="textColor">texto: </label>
            <div
              className="w-6 h-6 ml-2 rounded-full border-2 border-gray-300 cursor-pointer"
              style={{ backgroundColor: textColor }}
              onClick={handleTextClickColor}
            />
            <input
              ref={buttonTextInputRef}
              type="color"
              id="textColor"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              hidden
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="backgroundImage">URL de la imagen de fondo: </label>
          <input
            type="text"
            id="backgroundImage"
            value={backgroundImage}
            onChange={(e) => setBackgroundImage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ColorMenu;
