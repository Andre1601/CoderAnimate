import React from "react";
import { BsChevronDown } from "react-icons/bs";

function Theme() {

  const themeItem = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night'];

  return (
    <div className="flex mt-3">
      <h2 className="mr-3">Theme</h2>
      <button data-dropdown-toggle="dropdown" className="flex bg-[#7868E6] text-white px-2 text-xs  rounded items-center relative">
        <BsChevronDown className="mr-1" />
        <h3>dracula</h3>
        <div id="dropdown" className="hidden grid grid-rows-5 gap-1 w-full absolute left-0 top-[110%] border-solid border-2 border-[#7868E6] text-black">
          {themeItem.map((theme) => (
            <button className="hover:bg-[#7868E6] focus:bg-[#7868E6] focus:text-white py-1" >{theme}</button>
          ))}
        </div>
      </button>
    </div>
  );
}

export default Theme;
