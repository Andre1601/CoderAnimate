import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function UserStatus({data}) {
  return (
    <div className="grid grid-cols-[70px_1fr_90px] mt-3 ">
      <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
      <div>
        <h3>{data.name}</h3>
        <button className="text-[#7868E6] ">Follow</button>
      </div>
      <button className="flex text-base bg-[#7868E6] p-4 rounded-2xl mx-auto text-white leading-[0.8]">
        <BsFillHeartFill />
        <h3 className="ml-3" >Like</h3>
      </button>
    </div>
  );
}

export default UserStatus;
