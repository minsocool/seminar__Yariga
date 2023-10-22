import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../Icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-[15px] px-5 flex justify-between items-center">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>

      <User />
    </div>
  );
};

export default Topbar;

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 w-max flex-shrink-0">
      <Image src="/logo.png" alt="Yariga" width={173} height={34.5} />
    </Link>
  );
}

function Search({}) {
  return (
    <label className="bg-grayf4 flex items-center p-[10px] flex-[0_1_405px] gap-4 rounded h-[38px]">
      <IconSearch />
      <input
        className="bg-transparent w-full outline-none text-xs font-normal text-primary placeholder:text-secondary font-manrope"
        type="text"
        placeholder="Search Property, Customer etc"
      />
    </label>
  );
}

const User = () => {
  return (
    <div className="flex items-center gap-5">
      <IconNotification />

      <div className="flex items-center gap-[10px]">
        <Image
          src="https://cdn.pixabay.com/photo/2023/06/26/04/43/ai-generated-8088695_1280.jpg"
          alt="avatar"
          width={40}
          height={40}
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-primary text-sm font-semibold">
            Hawkins Maru
          </span>
          <span className="text-secondary text-sm font-normals">
            Company Manager
          </span>
        </div>
      </div>
    </div>
  );
};
