import { cn } from "@/util";
import React from "react";

type CardProps = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["div"];

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={cn(`bg-grayfc rounded-2xl p-5 pb-6 ${props.className}`)}
    >
      {children}
    </div>
  );
};

export default Card;
