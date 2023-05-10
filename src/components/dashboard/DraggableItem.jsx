import { useRef, useState } from "react";
import Item from "./Item";
import "@/styles/DraggableItem.css";
const DraggableItem = ({ item, index, moveItem }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const ref = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", index);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    moveItem(fromIndex, index);
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  return (
    <li
      ref={ref}
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`py-2 ${isDragOver ? "drag-over" : ""}`}
    >
      <Item props={item} index={index} />
    </li>
  );
};

export default DraggableItem;
