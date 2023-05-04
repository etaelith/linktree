import React from "react";
const webs = [
  {
    name: "Twitter",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Facebook",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Instagram",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Paypal",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Onlyfans",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Amazon",
    link: "https://twitter.com/3taelith/",
  },
];
const Main = () => {
  return (
    <div className="w-80 sm:w-2/5 m-auto p-4">
      <ul className="flex flex-col justify-center items-center gap-6">
        {webs.map((item, index) => (
          <li
            key={index}
            className="w-full flex items-center justify-center bg-black bg-opacity-60 h-12 hover:bg-opacity-80 hover:transform hover:translate-y-[-5px] hover:translate-x-[-5px] hover:scale-[1.05] transition-all duration-300 ease-out"
          >
            <a href={item.link} target="_blank" className="w-full">
              <h2 className="text-white text-center">{item.name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
