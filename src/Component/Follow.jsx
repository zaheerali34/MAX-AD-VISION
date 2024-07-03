import React from "react";

export const Follow = () => {
  return (
    <div className="w-full h-[150vh] px-[10rem] flex items-start gap-[4rem] mt-[7rem] max-[992px]:flex-col max-md:px-[1rem]">
      <div className="w-full flex items-start flex-col gap-8  max-md:items-center">
        <h2 className="text-[5vw] font-extrabold font-[Nunito] text-[#2D2D33] max-md:text-[2.5rem]">Follow Our Journey</h2>
        <div className="w-full h-[250px] flex items-center flex-col gap-[2rem] max-md:w-full ">
          <img src="../image/3.jpg" alt="" className="w-full h-full rounded-2xl"/>
          <img src="../image/4.jpg" alt="" className="w-full h-full rounded-2xl"/>
          <img src="../image/5.png" alt="" className="w-full h-full rounded-2xl"/>
        </div>
      </div>

      <div className="w-full h-[670px] flex items-center flex-col gap-[2rem] max-md:mt-[33rem]">
          <img src="../image/6.jpg" alt="" className="w-full h-full rounded-2xl max-md:h-[250px]"/>
          <img src="../image/7.jpg" alt="" className="w-full h-full rounded-2xl"/>
      </div>
    </div>
  );
};
