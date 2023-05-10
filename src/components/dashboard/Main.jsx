"use client";

import ColorMenu from "./ColorMenu";

import DraggableItem from "./DraggableItem";
import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "@/context/ItemsProvider";
import FormLink from "./FormLink";
import Navigation from "../Navigation";

const Main = () => {
  const { items, moveItem } = useContext(ItemsContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const links = items.map((item, index) => (
    <DraggableItem key={index} item={item} index={index} moveItem={moveItem} />
  ));
  return (
    <div className="flex flex-col my-4 mx-4 min-h-screen text-black">
      <Navigation />
      <h1 className="text-black mx-auto mb-2">Dashboard</h1>
      <div className="border-2 p-2 rounded-md">
        <div className="flex justify-center">
          <ColorMenu />
        </div>
        <FormLink />
      </div>
      <ul className="pt-4 text-black">{mounted && links}</ul>
    </div>
  );
};

export default Main;
