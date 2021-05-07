import React from "react";

export function InputText({
  id,
  className,
  name,
  value,
  label,
  placeholder,
  type,
  smallText,
  onChange,
  addProps,
}) {
  return (
    <div className="flex flex-col space-y-2 text-lg w-full">
      <label htmlFor={id} className="font-bold">
        {label}
        <span className="text-xs text-gray-400 ml-2">{smallText || ""}</span>
      </label>
      <input
        type={type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        className="p-2 w-full border-2 rounded-lg focus:border-greenPea focus:outline-none text-base"
        {...addProps}
      />
    </div>
  );
}

export function InputArea({
  id,
  className,
  name,
  value,
  label,
  placeholder,
  type,
  onChange,
  smallText,
  addProps,
}) {
  return (
    <div className="flex flex-col space-y-2 text-lg w-full">
      <label htmlFor={id} className="font-bold">
        {label}
        <span className="text-xs text-gray-400 ml-2">{smallText || ""}</span>
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        rows={3}
        style={{ resize: false }}
        onChange={onChange}
        className="p-2 w-full border-2 rounded-lg focus:border-greenPea focus:outline-none text-base"
        {...addProps}
      />
    </div>
  );
}
