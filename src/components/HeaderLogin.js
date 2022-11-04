import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderLogin() {
  return (
    <header className="grid grid-cols-[30px_1fr_30px] px-3 bg-[#7868E6] h-16 justify-items-center items-center text-2xl text-white">
      <button><BiArrowBack/></button>
      <h1>CoderAnimate</h1>
      <button><GiHamburgerMenu/></button>
    </header>
  );
}

export default HeaderLogin;
