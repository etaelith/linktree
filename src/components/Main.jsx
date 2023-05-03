import React from "react";

const Main = () => {
  return (
    <div className="h-3/5 max-w-2xl m-auto p-4">
      <ul className="flex flex-col justify-center items-center h-full gap-6">
        <li className="w-full bg-slate-500 h-12 flex items-center justify-center">
          <h2 className="">Facebook</h2>
        </li>
        <li className="w-full bg-slate-500 h-12 flex items-center justify-center">
          <h2 className="">Twitter</h2>
        </li>
        <li className="w-full bg-slate-500 h-12 flex items-center justify-center">
          <h2 className="">Paypal</h2>
        </li>
        <li className="w-full bg-slate-500 h-12 flex items-center justify-center">
          <h2 className="">Onlyfans</h2>
        </li>
        <li className="w-full bg-slate-500 h-12 flex items-center justify-center">
          <h2 className="">Cafecito</h2>
        </li>
        <li className="w-full bg-slate-500 h-12 flex items-center justify-center">
          <h2 className="">Amazon</h2>
        </li>
      </ul>
    </div>
  );
};

export default Main;
