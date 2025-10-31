import React from "react";

const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  className
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={label} className="text-sm font-semibold text-gray-800">
          {label}
        </label>
      )}
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          border-b border-gray-300
          focus:outline-none
          focus:border-blue-500
          py-2
          text-sm text-gray-700
          bg-transparent
          transition-colors
        ` + (className ? ` ${className}` : "")}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
