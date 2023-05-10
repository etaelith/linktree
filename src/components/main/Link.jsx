const Link = ({ item }) => {
  return (
    <li className="w-full rounded-3xl flex items-center justify-center bg-black bg-opacity-60 h-12 hover:bg-opacity-80 hover:transform hover:translate-y-[-5px] hover:translate-x-[-5px] hover:scale-[1.05] transition-all duration-300 ease-out">
      <a href={item.link} target="_blank" className="w-full">
        <h2 className="text-white text-center">{item.name}</h2>
      </a>
    </li>
  );
};
export default Link;
