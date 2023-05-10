import List from "@/components/main/List";
import ListDefault from "./ListDefault";

const Main = ({ id }) => {
  if (!id) {
    return (
      <div className="w-80 sm:w-2/5 m-auto p-4">
        <ListDefault />
      </div>
    );
  }
  return (
    <div className="w-80 sm:w-2/5 m-auto p-4">
      <List />
    </div>
  );
};

export default Main;
