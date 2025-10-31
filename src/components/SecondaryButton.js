// src/components/Button.jsx
import React from "react";

const SecondaryButton = ({
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
      className={`w-full py-2 rounded-md font-semibold text-[#3991a7] border border-[#3991a7] transition-all disabled:opacity-60 ${className}`}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
