import React from "react";

const Card = ({ title, message }: { title: string; message: string }) => {
  return (
    <div className="flex flex-col border-swell-10 border-2">
      <h1 className="flex w-full justify-center items-center bg-swell-10 text-xl font-medium text-swell-60 py-1.5">
        {title}
      </h1>
      <p className="p-4">{message}</p>
    </div>
  );
};

export default Card;
