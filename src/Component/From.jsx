import React from "react";

export const From = () => {
  return (
    <>
      <div className="w-full h-full px-[10rem] py-[4rem] flex items-start justify-between font-[Nunito] gap-8 max-[992px]:flex-col max-[992px]:items-center">
        <p className="text-[2rem] font-extrabold text-[#2D2D33] max-[992px]:w-[20rem]">
          Call us to schedule a 30 minute consultation to find out how we can
          help you achieve stellar rankings.
        </p>

        <form className="w-full flex items-start flex-col gap-10">
          <div className="w-full flex items-center gap-6">
            <input
              type="text"
              placeholder="Name"
              className="text-[#2D2D33] outline-none border-b-2 border-[#CECED6] bg-transparent text-md "
            />
            <input
              type="text"
              placeholder="Eg. Kulen"
              className="text-[#2D2D33] outline-none border-b-2 border-[#CECED6] bg-transparent text-md "
            />
          </div>

          <input
            type="text"
            placeholder="Eg. Name@Email.com"
            className="text-[#2D2D33] outline-none border-b-2 border-[#CECED6] bg-transparent text-md w-full"
          />
          <input
            type="text"
            placeholder="Eg. (000) XXXX XXXX XXXX"
            className="text-[#2D2D33] outline-none border-b-2 border-[#CECED6] bg-transparent text-md w-full"
          />
          <input
            type="text"
            placeholder="Eg. Content Writing"
            className="text-[#2D2D33] outline-none border-b-2 border-[#CECED6] bg-transparent text-md w-full"
          />

          <button className="p-[20px] px-[4rem] bg-[#D93020] rounded-full font-[Nunito] text-white shadow-xl shadow-[#d92f2046]">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
