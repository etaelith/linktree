import editIcon from "../../assets/edit.png";
import Image from "next/image";
const Item = ({ props }) => {
  return (
    <div className="flex flex-col justify-start h-32 my-4 pl-4 border-2 rounded-md border-emerald-500 gap-4">
      <div className="flex gap-2 pt-2">
        <h2>{props.name}</h2>
        <Image src={editIcon} alt="edit" width={20} height={20} />
      </div>
      <div className="flex gap-2">
        <h3>{props.link}</h3>
        <Image src={editIcon} alt="edit" width={20} height={20} />
      </div>
    </div>
  );
};

export default Item;
