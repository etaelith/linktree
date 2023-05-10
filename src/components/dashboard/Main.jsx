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
    <div className="text-white my-4 mx-4 min-h-screen text-black">
      <h1 className="text-black">Dashboard</h1>
      {!items ? (
        <div>Loading</div>
      ) : (
        <div>
          <ColorMenu />
          <form className="pt-4 text-black" onSubmit={handleSubmit}>
            <input
              className="bg-transparent placeholder:italic placeholder:text-slate-700 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              className="ml-2 bg-transparent placeholder:italic placeholder:text-slate-700 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              name="link"
              value={inputValues.link}
              onChange={handleInputChange}
              placeholder="Link"
            />
            <button className="ml-2" type="submit">
              + Add link
            </button>
          </form>
          <ul className="pt-4 text-black">
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
