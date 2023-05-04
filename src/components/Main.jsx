import Link from "next/link";
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
    <div className="h-3/5 max-w-2xl m-auto p-4 opacity-60">
      <ul className="flex flex-col justify-center items-center h-full gap-6">
        {webs.map((item, index) => (
          <li
            key={index}
            className="w-full bg-black h-12 flex items-center justify-center"
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
