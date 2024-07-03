import React from "react";
import { FaPlay } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div className="w-full h-full flex items-center gap-6 mt-[10rem] py-8 px-[3rem] max-[992px]:flex-col max-[992px]:justify-center ">
        <div className="w-full flex items-start flex-col gap-[2rem]">
          <h4 className="text-[#D93020] font-[Nunito] font-bold text-[1rem]">
            Real estate, businesses, and e-commerce.
          </h4>
          <h1 className="w-full text-[4.2vw] font-[Nunito] font-extrabold leading-[70px]">
            Promote Yourself to The Fullest. Increase your Vision.
          </h1>
          <button className="p-[20px] px-[4rem] bg-[#D93020] rounded-full font-[Nunito] text-white shadow-xl shadow-[#d92f2046]">
            Contact Us
          </button>
        </div>

        <div className="w-full ">
          <div className="w-[10rem] h-[10rem] bg-[#a9a9a9a9] rounded-full z-50 absolute top-[28rem] right-[25rem] shadow-sm flex items-center justify-center">
            <div className="w-[8rem] h-[8rem] border-[1px] border-[#7b7b7bb0] rounded-full flex items-center justify-center text-white text-2xl">
            <FaPlay />
            </div>
          </div>

          <div className="w-[40vw] h-[30vw] bg-[#10dbff32] blur-[50px] rounded-full"></div>
          <img
            src="../image/1.jpg"
            alt=""
            className="absolute top-[30rem] w-[25vw] h-[35vw] z-40 rounded-md rotate-6 grayscale max-[992px]:top-[40rem] "
          />
          <img
            src="../image/2.jpg"
            alt=""
            className="absolute top-[15rem] right-[5rem] w-[25vw] h-[35vw] z-40 rounded-md rotate-6 grayscale max-[992px]:top-[35rem] max-[992px]:left-[20rem]"
          />
        </div>
      </div>
    </>
  );
};
