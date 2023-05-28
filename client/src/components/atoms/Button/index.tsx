import React from "react";

interface IButton {
  children: any;
  onClick: any;
  className?: string;
  isDisabled?: boolean;
}

const Button = (props: IButton) => {
  const { onClick, className, children, isDisabled } = props;

  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        className={`flex w-full p-2 rounded bg-swell-30 text-white justify-center border border-dark ${className} ${
          isDisabled && "opacity-60"
        }`}
        disabled={isDisabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
