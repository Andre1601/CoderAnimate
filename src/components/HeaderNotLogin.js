import React from "react";
import { Link } from "react-router-dom";

function HeaderNotLogin() {
  return (
    <header className="grid grid-cols-[120px_1fr_120px] bg-[#7868E6] h-16 justify-items-center items-center  text-white">
      <div></div>
      <h1 className="text-2xl">CoderAnimate</h1>
      <Link to='/login'>
        <button className="text-base bg-[#B8B5FF] hover:bg-[#e9e8ff] px-5 py-2 rounded-md">
          Sign in
        </button>
      </Link>
    </header>
  );
}

export default HeaderNotLogin;
