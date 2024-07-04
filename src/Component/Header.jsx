import React from "react";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between gap-9 px-[10rem] py-10 max-sm:px-[1rem]">
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

    <div className="hidden max-[992px]:block text-[2rem] hover:text-[#D93020]">
      <span><IoMenu /></span>
    </div>

    </header>
  );
};
