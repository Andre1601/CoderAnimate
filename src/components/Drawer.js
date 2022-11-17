import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom";

function Drawer() {
  return (
    <div className="flex">
      <button className="sm:hidden"><GiHamburgerMenu /></button>
      <Link to="/profile"><div className="hidden sm:block w-11 h-11 bg-orange-500 rounded-full"></div></Link>
      <Link to="/upload"><button className="hidden sm:block text-base bg-[#B8B5FF] hover:bg-[#d2d1f3] py-3 px-4 ml-2 rounded-2xl mx-auto text-white" >Upload</button></Link>
    </div>
  );
}

export default Drawer;
