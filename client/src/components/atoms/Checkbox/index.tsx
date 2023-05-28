import React from "react";

interface ICheckbox {
  value?: string;
  name: string;
  label: string;
  checked?: boolean;
  handleClick: () => void;
}

const Checkbox = ({ value, name, label, checked, handleClick }: ICheckbox) => {
  return (
    <div className="flex space-x-2 pb-2">
      <input
        value={value}
        onClick={handleClick}
        type="checkbox"
        checked={checked}
        className="flex items-center justify-start font-medium rounded border-swell-30 border-2 text-base bg-white px-4 py-3"
        id={name}
      />
      <label className="text-lg font-medium" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
