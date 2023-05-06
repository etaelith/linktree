"use client";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import ColorMenu from "./ColorMenu";

import DraggableItem from "./DraggableItem";
import { useState } from "react";

const Main = () => {
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
    <div className="text-white my-4 mx-4 min-h-screen">
      <h1>Dashboard</h1>
      <div>
        <ColorMenu />
        <form className="pt-4 text-black" onSubmit={handleSubmit}>
          <input
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            name="link"
            value={inputValues.link}
            onChange={handleInputChange}
            placeholder="Link"
          />
          <button type="submit">+ Add link</button>
        </form>
        <ul className="pt-4">
          {items.length > 0 &&
            items.map((item, index) => (
              <DraggableItem
                key={index}
                item={item}
                index={index}
                moveItem={moveItem}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
