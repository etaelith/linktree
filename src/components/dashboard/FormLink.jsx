import { ItemsContext } from "@/context/ItemsContext";
import { useContext, useEffect, useState } from "react";

const FormLink = () => {
  const { inputValues, handleSubmit, handleInputChange } =
    useContext(ItemsContext);
  return (
    <form
      className="pt-4 text-black flex flex-col md:flex-row justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent placeholder:italic placeholder:text-slate-700 block w-full md:w-1/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="name"
        value={inputValues.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        className="md:ml-2 bg-transparent placeholder:italic placeholder:text-slate-700 block w-full md:w-1/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        name="link"
        value={inputValues.link}
        onChange={handleInputChange}
        placeholder="Link"
      />
      <button
        className="ml-2 p-2 border-2 rounded-md hover:bg-black hover:text-white"
        type="submit"
      >
        + Add link
      </button>
    </form>
  );
};

export default FormLink;
