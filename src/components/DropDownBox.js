import React from "react";

const DropdownBox = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  className,
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
        className={
          `border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700` +
          (className ? ` ${className}` : "")
        }
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

export default DropdownBox;
