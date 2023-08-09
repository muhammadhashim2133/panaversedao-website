import React, { FC } from "react";

interface iprops {
  title: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}

const QuarterBox: FC<iprops> = ({ title, description, number, haveBorder = true }) => {
  return (
    <div className={`flex-1 px-8 py-12 relative flex flex-col items-center justify-center  rounded-md ${haveBorder && "border"}`}>
      <h4 className="text-md font-bold text-slate-900">{title}</h4>
      <p className="text-slate-800 mt-2">{description}</p>
      <div className="text-slate-200 absolute text-9xl font-bold top-4 right-16 -z-10">{number}</div>
    </div>
  );
};

export default QuarterBox;
