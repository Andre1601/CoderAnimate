import React from "react";

function General() {
  return (
    <div className="flex flex-col my-10" >
      <label>Username</label>
      <input className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
      <label className="mt-7">Email</label>
      <input className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
    </div>
  );
}

export default General;
