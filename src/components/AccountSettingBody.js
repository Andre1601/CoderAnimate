import React from "react";
import { BsChevronDown } from "react-icons/bs";
import General from "./Setting/General";

function AccountSettingBody() {
  return (
    <main className=" px-5 sm:px-10 text-[#777777] ">
      <button className="flex justify-between border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-3 px-3 w-full mt-20">
        <h2 className="leading-none">General</h2>
        <BsChevronDown />
      </button>
      <General/>
      <button className="bg-[#7868E6] px-5 py-2 my-10 text-white rounded-xl float-right">Save Changes</button>
    </main>  
  );
}

export default AccountSettingBody;
