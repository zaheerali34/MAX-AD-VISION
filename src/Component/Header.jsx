import React from "react";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-[7rem] py-10">
      <div className="text-[24px] font-extrabold tracking-[3px] font-[Nunito]">MAX AD VISION</div>

      <nav>
        <ul className="flex items-center gap-[3rem] text-[17px] font-[Nunito] font-semibold">
          <li className="hover:cursor-pointer hover:text-[#D93020]">Home</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Services</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Gallery</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Gallery</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Project Quote</li>
          <li className="hover:cursor-pointer hover:text-[#D93020]">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};
