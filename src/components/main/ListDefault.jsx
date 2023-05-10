const defaultValue = [
  { name: "facebook", link: "https://facebook.com" },
  { name: "twitter", link: "https://twitter.com" },
  { name: "amazon", link: "https://amazon.com" },
  { name: "instagram", link: "https://instagram.com" },
  { name: "cafecito", link: "https://cafecito.com" },
];
const ListDefault = () => {
  return (
    <ul className="flex flex-col justify-center items-center gap-6">
      {defaultValue.map((item, index) => (
        <li
          key={index}
          className="w-full rounded-3xl flex items-center justify-center bg-black bg-opacity-60 h-12 hover:bg-opacity-80 hover:transform hover:translate-y-[-5px] hover:translate-x-[-5px] hover:scale-[1.05] transition-all duration-300 ease-out"
        >
          <a href={item.link} target="_blank" className="w-full">
            <h2 className="text-white text-center">{item.name}</h2>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListDefault;
