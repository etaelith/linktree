import { useContext } from "react";
import editIcon from "../../assets/edit.png";
import Image from "next/image";
import { ColorContext } from "@/context/ColorProvider";
import { hexToRgb } from "@/utils/hexColor";
const Item = ({ props, index }) => {
  const { textColor, buttonColor } = useContext(ColorContext);
  const test = () => {
    console.log("test", index);
  };
  return (
    <div
      className="relative flex flex-col justify-start h-32 my-4 pl-4 border-2 rounded-md border-emerald-500 gap-4 "
      style={{
        background: `${hexToRgb(buttonColor, 0.6)}`,
        color: `${textColor}`,
      }}
    >
      <div className="flex gap-2 pt-2">
        <h2>{props.name}</h2>
        <Image src={editIcon} alt="edit" width={20} height={20} />
      </div>
      <div className="flex gap-2">
        <h3>{props.link}</h3>
        <Image src={editIcon} alt="edit" width={20} height={20} />
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
