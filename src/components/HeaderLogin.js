import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Drawer from "./Drawer";

function HeaderLogin() {
  return (
    <header className="grid sm:flex grid-cols-[30px_1fr_30px] sm:justify-between px-3 sm:px-10 bg-[#7868E6]  h-16 sm:h-20 justify-items-center items-center text-2xl sm:text-4xl text-white">
      <button className="sm:hidden" ><BiArrowBack/></button>
      <h1>CoderAnimate</h1>
      <Drawer/>
    </header>
  );
}

export default HeaderLogin;
