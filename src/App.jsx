import React from "react";
import { Header } from "./Component/Header";
import { Home } from "./Component/Home";
import { Read } from "./Component/Read";
import { Services } from "./Component/Services";

export const App = () => {
  return (
    <>
      <div className="w-full h-full bg-[#F3F4F6]">
        <Header />
        <Home />
        <Read />
        <Services />
      </div>
    </>
  );
};
