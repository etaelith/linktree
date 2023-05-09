"use client";
import { ItemsContext } from "@/context/ItemsContext";
import { useContext } from "react";
import Link from "@/components/main/Link";
import dynamic from "next/dynamic";

const ComponentC = dynamic(() => import("@/context/ItemsContext"), {
  ssr: false,
});
const Links = () => {
  const { items } = useContext(ItemsContext);
  return (
    <ul className="flex flex-col justify-center items-center gap-6">
      {!items ? (
        <div>loading</div>
      ) : (
        items.map((item, index) => <Link key={index} item={item}></Link>)
      )}
    </ul>
  );
};

export default Links;
