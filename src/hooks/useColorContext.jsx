import { useContext, useEffect } from "react";
import { ColorContext } from "@/context/ColorProvider";

const useColorContext = () => {
  const { state, dispatch } = useContext(ColorContext);

  const saveColorsToLocalStorage = (
    buttonColor,
    textColor,
    backgroundImage
  ) => {
    localStorage.setItem("buttonColor", buttonColor);
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("backgroundImage", backgroundImage);
  };

  const getColorsFromLocalStorage = () => {
    const storedButtonColor = localStorage.getItem("buttonColor");
    const storedTextColor = localStorage.getItem("textColor");
    const storedBackgroundImage = localStorage.getItem("backgroundImage");

    if (storedButtonColor && storedTextColor && storedBackgroundImage) {
      dispatch({
        type: "SET_BUTTON_COLOR",
        payload: storedButtonColor,
      });
      dispatch({
        type: "SET_TEXT_COLOR",
        payload: storedTextColor,
      });
      dispatch({
        type: "SET_BACKGROUND_IMAGE",
        payload: storedBackgroundImage,
      });
    }
  };

  useEffect(() => {
    getColorsFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveColors = (buttonColor, textColor, backgroundImage) => {
    dispatch({
      type: "SET_BUTTON_COLOR",
      payload: buttonColor,
    });
    dispatch({
      type: "SET_TEXT_COLOR",
      payload: textColor,
    });
    dispatch({
      type: "SET_BACKGROUND_IMAGE",
      payload: backgroundImage,
    });

    saveColorsToLocalStorage(buttonColor, textColor, backgroundImage);
  };

  return { state, handleSaveColors };
};

export default useColorContext;
