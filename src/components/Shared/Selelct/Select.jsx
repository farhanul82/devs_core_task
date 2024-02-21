import React, { useState } from "react";

const Select = ({ id, options, onChange, value, label , placeholder}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
