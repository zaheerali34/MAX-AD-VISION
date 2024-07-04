import React from "react";
import { FaPlay } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div className="w-full h-full flex items-center gap-6 mt-[10rem] py-8 px-[10rem] max-[992px]:flex-col max-[992px]:justify-center max-[992px]:px-[1rem] max-md:mt-[1rem]">
        <div className="w-full flex items-start flex-col gap-[2rem]">
          <h4 className="text-[#D93020] font-[Nunito] font-bold text-[1rem]">
            Real estate, businesses, and e-commerce.
          </h4>
          <h1 className="w-full text-[4.2vw] font-[Nunito] font-extrabold leading-[70px] max-md:text-[3.5rem]">
            Promote Yourself to The Fullest. Increase your Vision.
          </h1>
          <button className="p-[20px] px-[4rem] bg-[#D93020] rounded-full font-[Nunito] text-white shadow-xl shadow-[#d92f2046]">
            Contact Us
          </button>
        </div>

        <div className="w-full max-[992px]:hidden">
          <div className="w-[10rem] h-[10rem] bg-[#a9a9a9a9] rounded-full z-50 absolute top-[28rem] right-[25rem] shadow-sm flex items-center justify-center">
            <div className="w-[8rem] h-[8rem] border-[1px] border-[#7b7b7bb0] rounded-full flex items-center justify-center text-white text-2xl">
            <FaPlay />
            </div>
          </div>

          <div className="w-[40vw] h-[30vw] bg-[#10dbff32] blur-[50px] rounded-full"></div>
          <img
            src="https://s3-alpha-sig.figma.com/img/2a64/7391/143a164b1aa42b819e98958a3b6fefcc?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VSKp4Ft1x5-H59pPAox8qBXeOFBDoznJYf4xMP1TbkgtneS8VfmOk6mscLri-60z78tvmCC33RMgUTneDjOLQ5fD2Ju2iFy7ypK-GKyba~QCPeC8~~GxgmmjNTBNbcX4U-XteSJVo~RhQ6r3k7TIcHNq2y0HvnmbVgsI4tsn3IRrIE61NmReP9uln~WRAiQm6vyK1UMJ6hkNFhUUvuPEjCyYs68CNUd4S1OI-Mm2Yh0yNOH~wvk9mMLmKBjA~B0KYs-BYm5P33K1CXIUhmYasLl-0V4Z4Xva-ctUu-itZxuvLUo0eEjWNNyzBF3R1cZnxojyvFWIbeIeB5vmoGBB5g__"
            alt=""
            className="absolute top-[30rem] w-[25vw] h-[35vw] z-40 rounded-md rotate-6 grayscale max-[992px]:top-[45rem] "
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/c4ef/2f09/e371cc53dcaa6e9e7952a04ca9faf9ac?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qkvHjseG5pvFxfCZ5hawKo7L9dil9Dvugyu8yIybpPNzTmR5tko82Am~0EaDfEDlizzT3TYa2jaEy3vZtRPypGY3d9JwDpWm8We4HaWzWsKYJhM3U8swEUqB0IGniLAUwQuSZcKfbMlnzdfUuA7Zm6iLjP~~OBWV2h8s6Z-~zQ4FSEWG6GeMT72DwKoHL18OvbodEXMvEGPZN-Wn7j9s2Bo4BwOGjr~oRg3mG9fu3AnHwX0-tn7UBCKqVzN-pFGB1ZReDJ0hBiKGO1tEL739OTmDqyVW-G8i67sawPiiK0rOdnQlA9WIg9oSSb2Bh84svJVjMUIc83SM8XkDo9WQ5g__"
            alt=""
            className="absolute top-[15rem] right-[5rem] w-[25vw] h-[35vw] z-40 rounded-md rotate-6 grayscale max-[992px]:top-[40rem] max-[992px]:left-[8rem]"
          />
        </div>
      </div>
    </>
  );
};
