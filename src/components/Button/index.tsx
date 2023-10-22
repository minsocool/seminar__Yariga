import React from "react";

type IButton = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["button"];

const Button = ({ children, ...props }: IButton) => {
  return (
    <button
      className="bg-bg-primary text-grayfc text-sm font-medium leading-[22px rounded-[10px] capitalize py-[13px] px-5"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
