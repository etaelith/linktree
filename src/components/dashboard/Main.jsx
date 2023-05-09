"use client";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import ColorMenu from "./ColorMenu";

import DraggableItem from "./DraggableItem";
import { useState, useContext } from "react";
import { ItemsContext } from "@/context/ItemsContext";

const Main = () => {
  const { inputValues, items, handleSubmit, handleInputChange, moveItem } =
    useContext(ItemsContext);

  return (
    <div className="text-white my-4 mx-4 min-h-screen">
      <h1>Dashboard</h1>
      {!items ? (
        <div>Loading</div>
      ) : (
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
      )}
    </div>
  );
};

export default Main;
