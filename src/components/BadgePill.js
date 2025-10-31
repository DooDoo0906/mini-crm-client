import React from "react";
export default function BadgePill({ children, variant }) {
  const base =
    "inline-flex items-center px-3 py-1 text-sm rounded-full font-medium";
  const map = {
    high: "text-red-600 bg-red-50",
    medium: "text-orange-600 bg-orange-50",
    awaiting: "text-yellow-700 bg-yellow-50",
    inprogress: "text-indigo-700 bg-indigo-50",
    connected: "text-green-600 bg-green-50",
    error: "text-red-500 bg-red-50",
    mapped: "text-green-600 bg-green-50",
    needmap: "text-yellow-700 bg-yellow-50",
    paid: "text-green-700 bg-green-50",
    unpaid: "text-red-600 bg-red-50",
  };
  return (
    <span className={`${base} ${map[variant] || map.default}`}>{children}</span>
  );
}
