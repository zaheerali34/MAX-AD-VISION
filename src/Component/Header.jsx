import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Header = () => {

  const [Nav, SetNav] = useState(false);

  const head = ()=> {
    SetNav(!Nav)
  }

  return (
    <header className="w-full flex items-center justify-between gap-9 px-[10rem] py-10 max-[992px]:px-[1rem]">
      <div className="text-[2rem] font-extrabold tracking-[3px] font-[Nunito] max-sm:text-[1.3rem]">MAX AD VISION</div>

      <nav>
        <ul className="flex items-center gap-[3rem] text-[17px] font-[Nunito] font-semibold max-[992px]:hidden">
          <li className="hover:cursor-pointer hover:text-[#D93020]">Home</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Services</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Gallery</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Gallery</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Project Quote</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Contact Us</li>
        </ul>
      </nav>

    <div onClick={head} className="hidden max-[992px]:block text-[2rem] hover:text-[#D93020] cursor-pointer">
      <span><IoMenu /></span>
    </div>

    <ul className={Nav ? "fixed top-[5rem] right-0 w-full px-4 py-4 bg-white shadow-lg ease-in duration-500 flex items-center flex-col gap-6" : "w-[50%] hidden"}>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Home</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Services</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Gallery</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Gallery</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Project Quote</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Contact Us</li>
        </ul>
    </header>
  );
};
