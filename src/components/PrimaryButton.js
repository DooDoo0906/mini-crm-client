import React from "react";

const PrimaryButton = ({
  title,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-2 rounded-md font-semibold text-white bg-[#3991a7] hover:bg-[#277884] transition-all disabled:opacity-60 ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
