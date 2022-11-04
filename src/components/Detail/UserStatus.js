import React from "react";
import {BsFillHeartFill} from "react-icons/bs";

function UserStatus() {
  return (
    <div className="grid grid-cols-[70px_1fr_50px] mt-3 " >
      <div className="w-12 h-12 bg-orange-500 rounded-full" ></div>
      <div>
        <h3>Alex</h3>
        <h3 className="text-[#7868E6] " >Follow</h3>
      </div>
      <button className="text-base bg-[#7868E6] p-4 rounded-2xl mx-auto text-white" ><BsFillHeartFill/></button>
    </div>
  );
}

export default UserStatus;
