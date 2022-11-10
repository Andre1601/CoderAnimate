import React from "react";
import { BsChevronDown } from "react-icons/bs";
import EditProfile from "./Setting/EditProfile";
import General from "./Setting/General";
import Password from "./Setting/Password";
import SocialProfiles from "./Setting/SocialProfiles";

function AccountSettingBody() {
  return (
    <main className="sm:grid sm:grid-cols-[150px_1fr] sm:gap-x-8 px-5 sm:px-10 text-[#777777] ">
      <h2 className="hidden sm:block col-span-2 text-4xl my-16 font-semibold" >General</h2>
      <div className="hidden sm:flex flex-col" >
        <a tabIndex='0' className="cursor-pointer py-2 focus:font-semibold ">General</a>
        <a tabIndex='0' className="cursor-pointer py-2 focus:font-semibold">Edit Profile</a>
        <a tabIndex='0' className="cursor-pointer py-2 focus:font-semibold">Password</a>
        <a tabIndex='0' className="cursor-pointer py-2 focus:font-semibold">Social Profiles</a>
      </div>

      <button className="sm:hidden flex justify-between border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-3 px-3 w-full mt-20">
        <h2 className="leading-none">General</h2>
        <BsChevronDown />
      </button>
      <Password/>
      <button className="bg-[#7868E6] px-5 py-2 my-10 text-white rounded-xl float-right sm:col-span-2 ">Save Changes</button>
    </main>   
  );
}

export default AccountSettingBody;
