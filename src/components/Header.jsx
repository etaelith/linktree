import Avatar from "boring-avatars";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-1/5 bg-slate-700">
      <div>
        <Avatar
          size={96}
          name="Maria Mitchell"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          title="true"
        />
      </div>
      <h1>Maria Mitchell</h1>
      <h4>Description/Description2/Perro/gato</h4>
    </div>
  );
};

export default Header;
