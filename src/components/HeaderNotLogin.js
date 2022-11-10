import React from "react";

function HeaderNotLogin() {
  return (
    <header className="grid grid-cols-[120px_1fr_120px] bg-[#7868E6] h-16 justify-items-center items-center  text-white">
      <div></div>
      <h1 className="text-2xl">CoderAnimate</h1>
      <button className="text-base bg-[#B8B5FF] px-5 py-2 rounded-md">
        Sign in
      </button>
    </header>
  );
}

export default HeaderNotLogin;
