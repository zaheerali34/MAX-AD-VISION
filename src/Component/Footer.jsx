import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="w-full font-[Nunito] ">
        <div className="w-full px-[10rem] flex items-start justify-between max-[992px]:px-[1rem] max-[992px]:w-[150%] max-[992px]:flex-wrap">
          <div className="w-full">
            <h2 className="text-[2rem] font-extrabold text-[#242424]">
              MAX AD VISION
            </h2>
            <p className="text-md py-4 text-[#9999A8]">
              530 Fifth Avenue, New York, NY 10036
            </p>
            <span className="text-sm text-[#9999A8]">212-200-7213</span>
          </div>

          <div className="w-full flex items-start gap-[5rem] max-[992px]:flex-wrap">
            <div className="max-[992px]:mt-5">
              <h2 className="text-[1.5rem]  font-semibold text-[#242424]">
                Sitelink
              </h2>
              <ul className="w-[200%] pt-4 flex items-start flex-col text-[1.1rem] gap-4 text-[#9999A8]">
                <li>Services</li>
                <li>Gallery</li>
                <li>Project Quote</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="w-full">
              <h2 className="text-[1.5rem] font-semibold text-[#242424]">
                Stay Up to Date
              </h2>
              <p className="text-lg py-4 text-[#9999A8] max-[992px]:text-[1rem] max-[992px]:w-2/3">
                Writing for the web is changing. Keep current with marketing
                developments!
              </p>
              <div className="w-full h-[5rem] px-4 border-2 border-[#CECED6] rounded-full flex items-center justify-between max-[992px]:w-2/3">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full bg-none outline-none  bg-transparent"
                />
                <button className="w-2/4 p-[12px] bg-[#D93020] rounded-full font-[Nunito] text-white shadow-xl shadow-[#d92f2046]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-[#CECED6] mt-[5rem]"></div>

        <p className="px-[10rem] pt-4 text-center text-[1rem] text-[#CECED6] py-4 max-[992px]:px-[1rem]">Copyright © 2023 Max AD Vision - All Rights Reserved.</p>
      </footer>
    </>
  );
};
