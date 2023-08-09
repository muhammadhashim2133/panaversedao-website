import React, { FC } from "react";

const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className=" max-w-screen-2xl mx-auto  px-12">{children}</div>;
};

export default wrapper;
