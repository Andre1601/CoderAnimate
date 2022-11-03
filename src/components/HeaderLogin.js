import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderLogin() {
  return (
    <header className="grid grid-cols-[30px_1fr_30px] px-3 bg-[#7868E6] h-[8vh] justify-items-center items-center text-2xl text-white">
      <BiArrowBack className="cursor-pointer" />
      <h1>CoderAnimate</h1>
      <GiHamburgerMenu className="cursor-pointer" />
    </header>
  );
}

export default HeaderLogin;
