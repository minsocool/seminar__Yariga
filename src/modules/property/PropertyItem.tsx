import { IconBed, IconCross, IconPosition } from "@/components/Icons";
import Image from "next/image";
import React from "react";

const PropertyItem = () => {
  return (
    <div className="flex gap-3">
      <div className="relative flex-shrink-0">
        <Image
          src="https://cdn.pixabay.com/photo/2023/09/20/20/17/skyline-8265564_1280.jpg"
          alt="property"
          width={200}
          height={125}
          className="h-[125px] object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <div className="price rounded bg-[#DADEFA] py-[7px] px-[10px] w-max text-xs font-semibold text-bg-primary">$7400</div>
        <div className="name text-base font-semibold text-[#111]">Metro Jayakarta Hotel & Spa</div>
        <div className="position flex gap-1 items-center">
          <IconPosition />
          <span className="text-sm text-secondary mt-1">North Carolina, USA</span>
        </div>
        <div className="info flex gap-3 mt-3">
          <div className="flex gap-1">
            <IconBed />
            <span className="text-[#111] text-xs font-medium">4 beds</span>
          </div>
          <div className="flex gap-1">
            <IconCross />
            <span className="text-[#111] text-xs font-medium">28 M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
