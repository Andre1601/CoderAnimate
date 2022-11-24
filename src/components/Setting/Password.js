import React from "react";

function Password() {
  return (
    <div className="flex flex-col my-10 sm:my-0">
      <label htmlFor="old-password">Old Password</label>
      <input
        id="old-password"
        className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
      />
      <label htmlFor="password" className="mt-5">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
      />
    </div>
  );
}

export default Password;
