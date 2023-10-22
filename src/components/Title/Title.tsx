import React from "react";
import { ITitleProps } from "./type";

const Title = ({ children, className, ...props }: ITitleProps) => {
  return (
    <h2
      className={`text-title text-[25px] font-bold ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Title;
