"use client";
import { createContext, useState } from "react";
import useLocalStorageState from "@/hooks/useLocalStorageState";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [inputValues, setInvputValues] = useState({ name: "", link: "" });
  const [items, setItems] = useLocalStorageState("webs", []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues.name.trim() && inputValues.link.trim()) {
      const newItem = {
        name: inputValues.name,
        link: inputValues.link,
      };
      setItems([...items, newItem]);
      setInvputValues({ name: "", link: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setInvputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const movedItem = newItems.splice(fromIndex, 1)[0];
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  return (
    <ItemsContext.Provider
      value={{
        inputValues,
        items,
        handleSubmit,
        handleInputChange,
        moveItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
