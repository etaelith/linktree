"use client";
import { ColorContext } from "@/context/ColorProvider";
import { ItemsContext } from "@/context/ItemsProvider";
import { hexToRgb } from "@/utils/hexColor";
import { useContext, useEffect, useState } from "react";

const List = ({ id }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { state } = useContext(ColorContext);
  const { buttonColor, textColor } = state;
  const { items } = useContext(ItemsContext);
  const links = items.map((item, index) => (
    <li
      key={index}
      className="w-full rounded-3xl flex items-center justify-center bg-black bg-opacity-60 h-12 hover:bg-opacity-80 hover:transform hover:translate-y-[-5px] hover:translate-x-[-5px] hover:scale-[1.05] transition-all duration-300 ease-out"
      style={{
        background: `${hexToRgb(buttonColor, 0.6)}`,
        color: `${textColor}`,
      }}
    >
      <a href={item.link} target="_blank" className="w-full">
        <h2 className="text-center">{item.name}</h2>
      </a>
    </li>
  ));
  return (
    mounted && (
      <ul className="flex flex-col justify-center items-center gap-6">
        {links}
      </ul>
    )
  );
};

export default List;
