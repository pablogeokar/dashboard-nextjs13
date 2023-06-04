"use client";

import clsx from "clsx";

interface InputProps {
  type?: "text" | "password" | "email";
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export function Input({
  label,
  placeholder,
  fullWidth,
  type = "text",
}: InputProps) {
  return (
    <div className={clsx(`flex flex-col mt-4`, fullWidth && "w-full")}>
      {label && (
        <label htmlFor="" className="text-sm text-gray-700 ">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md px-2 text-sm text-gray-800 placeholder:font-light placeholder:placeholder-gray-200 focus:border-blue-300 focus:ring-1 focus:outline-none transition duration-500 ease-in-out`}
      />
    </div>
  );
}
