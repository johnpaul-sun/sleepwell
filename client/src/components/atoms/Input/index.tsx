import React from "react";

interface IInput {
  value?: string | number;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  onChange: (value: any) => void;
  className?: string;
}

const Input = ({
  value,
  name,
  label,
  type = "text",
  placeholder,
  onChange,
  className,
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
        className={`flex items-center justify-start font-medium rounded border-swell-30 border-2 text-base bg-white px-4 py-2 ${className}`}
        type={type}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
