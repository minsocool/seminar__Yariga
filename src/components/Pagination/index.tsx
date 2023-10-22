import React from "react";
import { IconArrowLeft } from "../Icons";
import { cn } from "@/util";

type IPaginationProps = JSX.IntrinsicElements["div"];

const Pagination = ({ className }: IPaginationProps) => {
  return (
    <div className={cn(`flex items-center gap-[10px] ${className}`)}>
      <div className="cursor-pointer">
        <IconArrowLeft />
      </div>
      <div className="w-9 h-9 cursor-pointer bg-bg-primary text-white rounded-md flex items-center justify-center">
        1
      </div>
      <div className="w-9 h-9 cursor-pointer text-secondary rounded-md flex items-center justify-center">
        2
      </div>
      <div className="w-9 h-9 cursor-pointer text-secondary rounded-md flex items-center justify-center">
        3
      </div>
      <div className="w-9 h-9 cursor-pointer text-secondary rounded-md flex items-center justify-center">
        4
      </div>
      <div className="w-9 h-9 cursor-pointer text-secondary rounded-md flex items-center justify-center">
        5
      </div>
      <div className="cursor-pointer rotate-180">
        <IconArrowLeft />
      </div>
    </div>
  );
};

export default Pagination;
