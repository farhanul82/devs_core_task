import React, { useState } from "react";

const CheckboxWithText = ({
  label,
  id = "checkbox",
  isDisableCheckbox = false,
  isChecked = false,
  onChecked,
  preLabel = "",
  classProps = "",
  checkboxIconClass,
}) => {
  // const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    // setChecked(!checked);
    onChecked(id);
  };

  return (
    <div className={`inline-flex items-start cursor-pointer ${classProps}`}>
      {/* Custom Checkbox */}
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
        disabled={isDisableCheckbox}
      />
      <label
        htmlFor={id}
        className={`h-4 w-4 mr-2 flex justify-center items-center  rounded-sm ${
          isDisableCheckbox ? "" : "cursor-pointer"
        }  ${checkboxIconClass} ${
          isChecked
            ? "bg-blue-500 border-blue-500"
            : ` border ${
                isDisableCheckbox
                  ? "bg-gray-100 cursor-default"
                  : "border-gray-400 bg-gray-200"
              } `
        }`}
      >
        {/* Checkmark */}
        {isChecked && (
          <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </label>
      {/* Text */}
      <span className=" ">
        {preLabel ? (
          <label htmlFor={id} className=" block text-xs text-gray-500">
            {preLabel}
          </label>
        ) : (
          false
        )}
        <label
          htmlFor={id}
          className={` block text-sm text-gray-900 font-semibold ${
            isDisableCheckbox ? "" : "cursor-pointer"
          }`}
        >
          {label}
        </label>
      </span>
    </div>
  );
};

export default CheckboxWithText;
