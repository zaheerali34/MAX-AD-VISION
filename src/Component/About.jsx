import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0D0D0F] font-[Nunito] flex items-center max-[992px]:flex-col ">
        <div className="px-[10rem]">
          <h1 className="text-[3rem] text-white font-bold">
            Our Clients Speak: What They Have to Say About Us
          </h1>

          <div className="flex items-start gap-[3rem] pt-[5rem]">
            <span className="text-4xl text-red-400">
              <FaQuoteLeft />
            </span>
            <p className="text-[#6E6E7A] text-xl font-medium">
              Sam is the only external PM recruiter I've talked to who truly
              understands it. In his line of work, nobody compares to him in
              terms of network, friendliness, and understanding of the PM
              environment. Sam has been kind with his time and has provided
              access. Excellent; would work with again.
            </p>
          </div>

          <div className="flex items-center justify-between pt-[4rem]">
            <div>
              <span className="text-1xl text-[#6E6E7A]">
                Group Produts Manager
              </span>
              <h2 className="text-white font-bold text-3xl pt-2">
                James Smith
              </h2>
            </div>
            <div className="w-[2rem] h-[2rem] bg-slate-400"></div>
          </div>
        </div>

        <div className="w-full h-full overflow-hidden">
            <svg
              width="518"
              height="797"
              viewBox="0 0 518 797"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M998.941 643.812C818.034 889.959 471.838 942.847 225.69 761.94C-20.4577 581.034 -73.3457 234.837 107.561 -11.3102C288.468 -257.458 634.664 -310.346 880.812 -129.439C1126.96 51.4678 1179.85 397.664 998.941 643.812ZM288.905 121.969C181.605 267.963 212.974 473.298 358.969 580.597C504.963 687.896 710.298 656.527 817.597 510.533C924.896 364.538 893.528 159.203 747.533 51.9043C601.539 -55.3948 396.204 -24.0259 288.905 121.969Z"
                fill="url(#paint0_linear_499_147)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_499_147"
                  x1="406"
                  y1="718"
                  x2="139.5"
                  y2="-29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#42E3CA" stop-opacity="0" />
                  <stop
                    offset="0.322917"
                    stop-color="#51EBD2"
                    stop-opacity="0.32"
                  />
                  <stop
                    offset="0.723958"
                    stop-color="#5AF0D8"
                    stop-opacity="0.81"
                  />
                  <stop offset="1" stop-color="#68F7E1" />
                </linearGradient>
              </defs>
            </svg>
        </div>
      </div>
    </>
  );
};
