import React from "react";
import { BsChevronDown } from "react-icons/bs";

function Theme() {
  return (
    <div className="flex mt-3">
      <h2 className="mr-3">Theme</h2>
      <button className="flex bg-[#7868E6] text-white px-2 text-xs rounded items-center relative">
        <BsChevronDown className="mr-1" />
        <h3>dracula</h3>
        <div className="hidden grid-rows-5 gap-1 w-full absolute left-0 top-[110%] border-solid border-2 border-[#7868E6] text-black">
            <button className="hover:bg-[#7868E6] focus:bg-[#7868E6] py-1" >dracula</button>
            <button className="hover:bg-[#7868E6] focus:bg-[#7868E6] py-1" >material</button>
            <button className="hover:bg-[#7868E6] focus:bg-[#7868E6] py-1" >mdn-like</button>   
            <button className="hover:bg-[#7868E6] focus:bg-[#7868E6] py-1" >the-matrix</button>
            <button className="hover:bg-[#7868E6] focus:bg-[#7868E6] py-1">night</button>
        </div>
      </button>
    </div>
  );
}

export default Theme;
