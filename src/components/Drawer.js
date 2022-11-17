import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom";


function Drawer() {
  // Untuk Responsive Klik Drawer
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("drawer");
  }
  // ==============================
  return (
  <>
    <div className="flex">
      <button className="sm:hidden z-50" onClick={showNavbar}><GiHamburgerMenu /></button>
      <Link to="/profile"><img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" className="hidden sm:block w-11 h-11 rounded-full"/></Link>
      <Link to="/upload"><button className="hidden sm:block text-base bg-[#B8B5FF] hover:bg-[#d2d1f3] py-3 px-4 ml-2 rounded-2xl mx-auto text-white" >Upload</button></Link>
    </div>

    <div className="z-30 fixed md:hidden drawer duration-500 top-0 right-0 flex flex-col items-center w-full bg-[#7868E6] h-screen " onClick={showNavbar} ref={navRef}>
      <Link to="/profile"><img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"  className="mt-20 sm:block duration-500 w-16 h-16  rounded-full" onClick={showNavbar}/></Link>
      <Link to="/upload"><button className="mt-20 sm:block duration-500 text-base bg-[#B8B5FF] hover:bg-[#d2d1f3] py-3 px-4 ml-2 rounded-2xl mx-auto text-white" onClick={showNavbar} >Upload</button></Link>
    </div>
  </>
  );
}

export default Drawer;
