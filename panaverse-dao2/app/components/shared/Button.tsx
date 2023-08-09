import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return <button className="bg-[#00616C] py-3 px-6 rounded-full font-bold hover:scale-x-105 text-white duration-300">{text}</button>;
};

export default Button;
