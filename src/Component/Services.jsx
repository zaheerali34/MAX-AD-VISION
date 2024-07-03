import React from "react";

export const Services = () => {
  return (
    <div className="w-full h-full py-[4rem] px-[10rem] flex items-center justify-center flex-col max-md:px-[1rem]">
      <h1 className="text-[3vw] font-[Nunito] font-extrabold max-md:text-[3rem]">
        Our Services
      </h1>

      <div className="w-full flex items-center gap-6 mt-[5rem] max-[992px]:flex-col">
        <div
          className="w-full h-[30rem] bg-white shadow-lg rounded-[20px] p-[2rem] flex items-start flex-col gap-5 hover:shadow-2xl transition-all ease-in-out">
          <div className="w-[5rem] h-[5rem] bg-[#E7D9F8] rounded-full"></div>
          <h2 className="text-2xl font-bold font-[Nunito] ">Copywriting</h2>
          <p className="text-xl text-[#9999A8] font-[Nunito]">
            Copy should drive company growth. Short. Simple. Succinct.
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-[1rem] bg-[#f7f2fc] rounded-full text-[#A56CEB] font-[Nunito] font-semibold">
              Ad Coyp
            </span>
            <span className="p-[1rem] bg-[#f7f2fc] rounded-full text-[#A56CEB] font-[Nunito] font-semibold">
              Landing Page
            </span>
            <span className="p-[1rem] bg-[#f7f2fc] rounded-full text-[#A56CEB] font-[Nunito] font-semibold">
              Promotional Video Text
            </span>
            <span className="p-[1rem] bg-[#f7f2fc] rounded-full text-[#A56CEB] font-[Nunito] font-semibold">
              Email Marketing
            </span>
            <span className="p-[1rem] bg-[#f7f2fc] rounded-full text-[#A56CEB] font-[Nunito] font-semibold">
              Video Sales Text
            </span>
            <span className="p-[1rem] bg-[#f7f2fc] rounded-full text-[#A56CEB] font-[Nunito] font-semibold">
              Product Descriptions
            </span>
          </div>
        </div>

        <div
          className="w-full h-[30rem] bg-white shadow-lg rounded-[20px] p-[2rem] flex items-start flex-col gap-5 hover:shadow-2xl transition-all ease-in-out
        "
        >
          <div className="w-[5rem] h-[5rem] bg-[#D7FCEA] rounded-full"></div>
          <h2 className="text-2xl font-bold font-[Nunito] ">Copywriting</h2>
          <p className="text-xl text-[#9999A8] font-[Nunito]">
            Content controls your brand voice. Content must be on brand and
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-[1rem] bg-[#F2FCF8] rounded-full text-[#4FB283] font-[Nunito] font-semibold">
              SEO
            </span>
            <span className="p-[1rem] bg-[#F2FCF8] rounded-full text-[#4FB283] font-[Nunito] font-semibold">
              Blog Posts
            </span>
            <span className="p-[1rem] bg-[#F2FCF8] rounded-full text-[#4FB283] font-[Nunito] font-semibold">
              Social Media Captions
            </span>
            <span className="p-[1rem] bg-[#F2FCF8] rounded-full text-[#4FB283] font-[Nunito] font-semibold">
              Newsletters
            </span>
            <span className="p-[1rem] bg-[#F2FCF8] rounded-full text-[#4FB283] font-[Nunito] font-semibold">
              Content Video
            </span>
          </div>
        </div>

        <div
          className="w-full h-[30rem] bg-white shadow-lg rounded-[20px] p-[2rem] flex items-start flex-col gap-5 hover:shadow-2xl transition-all ease-in-out
        "
        >
          <div className="w-[5rem] h-[5rem] bg-[#CAE5FE] rounded-full"></div>
          <h2 className="text-2xl font-bold font-[Nunito] ">Copywriting</h2>
          <p className="text-xl text-[#9999A8] font-[Nunito]">
            Connect with your customer base.
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-[1rem] bg-[#F5FAFF] rounded-full text-[#62ACF4] font-[Nunito] font-semibold">
              Funnel Building
            </span>
            <span className="p-[1rem] bg-[#F5FAFF] rounded-full text-[#62ACF4] font-[Nunito] font-semibold">
              Community Management
            </span>
            <span className="p-[1rem] bg-[#F5FAFF] rounded-full text-[#62ACF4] font-[Nunito] font-semibold">
              Marketing Consulting
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
