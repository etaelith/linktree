import Avatar from "boring-avatars";
import Navigation from "../Navigation";

const defaultValue = { defaultText: "#000000", defaultBg: "#fff" };
const Header = ({ data }) => {
  const colors = !data ? defaultValue : data;
  const element = (
    <div className="flex flex-col lg:flex-row justify-center items-center w-auto h-30% bg-slate-950 bg-opacity-50 lg:border-2 lg:rounded-md lg:m-4">
      <Navigation colors={colors} />
      <div className="w-24 sm:w-28 lg:w-36">
        <Avatar
          size="100%"
          name="Maria Mitchell"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          title="true"
        />
      </div>
      <div className="flex flex-col text-white justify-center items-center lg:justify-between lg:items-start lg:ml-8">
        <h1>Maria Mitchell</h1>
        <h4 className="lg:ml-0 lg:mt-2">Description/Description2/Perro/gato</h4>
      </div>
    </div>
  );
  if (!data) {
    return element;
  }
  return;
};

export default Header;
