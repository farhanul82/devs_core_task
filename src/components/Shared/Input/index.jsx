import React from "react";
import { IoIosSearch } from "react-icons/io";

const Input = ({ type = "text", onChange }) => {
  return (
    <div className="relative">
      <input
        type={type}
        onChange={onChange}
        className="border border-slate-300 rounded-md focus:border-gray-600 focus:border-2 focus:outline-none bg-transparent pl-[24px] pr-[8px] py-[4px]"
        placeholder="search by name"
      />

      <div className="absolute top-[11px] left-[4px] text-black">
        <IoIosSearch />
      </div>
    </div>
  );
};

export default Input;
