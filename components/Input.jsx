"use client";

export default function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="outline-none bg-slate-200 w-40 lg:w-52 h-8 px-2 rounded-xl text-sm"
      value=""
      onChange={() => {}}
    />
  );
}
