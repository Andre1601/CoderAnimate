import React from "react";

function General() {
  return (
    <div className="flex flex-col my-10 sm:my-0" >
      <label for="username" >Username</label>
      <input id="username" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
      <label for="password" className="mt-7">Email</label>
      <input id="password" type="password" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
    </div>
  );
}

export default General;
