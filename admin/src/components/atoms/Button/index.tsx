import React from "react";

interface IButton {
  children: any;
  onClick: any;
  className?: string;
  bg?: string; 
}

const Button = ({
  onClick,
  className,
  children,
  bg = "bg-swell-30", 
}: any) => {
  return (
    <>
      <button 
        onClick={onClick}
        className={`flex w-full p-2 rounded ${bg} text-white justify-center border border-dark ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
