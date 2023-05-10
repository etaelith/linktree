import { useContext } from "react";
import editIcon from "@assets/edit.png";
import Image from "next/image";
import { ColorContext } from "@/context/ColorProvider";
import { hexToRgb } from "@/utils/hexColor";
const Item = ({ props, index }) => {
  const { state } = useContext(ColorContext);
  const { textColor, buttonColor } = state;
  const test = () => {
    console.log("test", index);
  };
  return (
    <div
      className="relative flex flex-col justify-start h-32 my-4 pl-4 border-2 rounded-md border-emerald-500 gap-4 "
      style={{
        background: `${hexToRgb(buttonColor, 0.6)}`,
        color: `${hexToRgb(textColor)}`,
      }}
    >
      <div className="flex gap-2 pt-2">
        <h2>{props.name}</h2>
        <div className="w-5 h-5">
          <Image src={editIcon} alt="edit" fill={false} />
        </div>
      </div>
      <div className="flex gap-2">
        <h3>{props.link}</h3>
        <div className="w-5 h-5">
          <Image src={editIcon} alt="edit" fill={false} />
        </div>
      </div>
      <button
        className="absolute top-0 right-0 mr-4 mt-4 text-red-600"
        onClick={test}
      >
        delete
      </button>
    </div>
  );
};

export default Item;
