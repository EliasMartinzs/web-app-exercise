import React from 'react';

export default function InputProgress({ label, name, type, onChange, value }) {
  return (
    <>
      <label className="text-white">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="w-96"
      />
    </>
  );
}
