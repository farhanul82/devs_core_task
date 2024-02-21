import React from "react";

const Button = ({
  icon = "",
  text = "",
  bgColor = "bg-white",
  paddingX = "4",
  paddingY = "2",
  borderColor = "border-blue-600",
  color = "text-blue-600",
  classProps = "",
  onClick
}) => {
  return (
    <button
      className={`flex items-center ${bgColor} border-2 ${borderColor} rounded-md ${color} px-4 py-${paddingY} ${classProps} focus:outline-none `}
      onClick={onClick}
    >
      {icon ? <span className="mr-2">{icon}</span> : false}
      <span className="">{text}</span>
    </button>
  );
};

export default Button;
