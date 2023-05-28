import React from "react";

interface IInput {
  value?: string;
  name: string;
  label: string;
  type?: string;
  onChange?: any;
  placeholder?: string;
  defaultValue?: string;
}

const Input = ({
  onChange,
  value,
  name,
  label,
  type = "text",
  placeholder,
  defaultValue = "",
}: IInput) => {
  return (
    <div className="flex flex-col space-y-1 pb-2">
      <label className="text-lg font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className="flex items-center justify-start font-medium rounded border-swell-30 border-2 text-base bg-white px-4 py-3"
        type={type}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
