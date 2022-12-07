import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import PopupMenu from "./PopupMenu";

function Drawer() {
  // Untuk Responsive Klik Drawer
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("drawer");
  };
  // ==============================
  return (
    <>
      <div className="flex">
        <button className="sm:hidden z-50" onClick={showNavbar}>
          <GiHamburgerMenu />
        </button>
        <div className="group">
          <Link to="/profile">
            <img
              alt=""
              src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
              className="hidden sm:block w-11 h-11 rounded-full"
            />
          </Link>
          <PopupMenu />
        </div>
        <Link to="/upload">
          <button className="hidden sm:block text-base bg-[#B8B5FF] hover:bg-[#d2d1f3] py-3 px-4 ml-2 rounded-2xl mx-auto text-white">
            Upload
          </button>
        </Link>
      </div>

      <div
        className="z-30 fixed md:hidden drawer duration-500 top-0 right-0 flex flex-col items-center w-full bg-[#7868E6] h-screen "
        onClick={showNavbar}
        ref={navRef}
      >
        <Link to="/profile">
          <img
            alt=""
            src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
            className="mt-20 sm:block duration-500 w-16 h-16  rounded-full"
            onClick={showNavbar}
          />
        </Link>
        <Link to="/upload">
          <button
            className="mt-16 sm:block duration-500 text-base bg-[#B8B5FF] hover:bg-[#d2d1f3] py-3 px-4 ml-2 rounded-2xl mx-auto text-white"
            onClick={showNavbar}
          >
            Upload
          </button>
        </Link>

        <Link to="/profile">
          <button
            className="mt-5 sm:block duration-500   py-3 px-4 ml-2 rounded-2xl mx-auto text-white text-xl hover:scale-110"
            onClick={showNavbar}
          >
            Profile
          </button>
        </Link>
        <Link to="/setting/edit">
          <button
             className="mt-5 sm:block duration-500   py-3 px-4 ml-2 rounded-2xl mx-auto text-white text-xl hover:scale-110"
            onClick={showNavbar}
          >
            Edit Profile
          </button>
        </Link>
        <Link to="/setting/general">
          <button
             className="mt-5 sm:block duration-500   py-3 px-4 ml-2 rounded-2xl mx-auto text-white text-xl hover:scale-110"
            onClick={showNavbar}
          >
            Account Settings
          </button>
        </Link>
        <Link to="/login">
          <button
             className="mt-5 sm:block duration-500 py-2 px-4 ml-2 rounded-2xl mx-auto text-white text-xl hover:scale-110"
            onClick={showNavbar}
          >
            Sign Out
          </button>
        </Link>
      </div>
    </>
  );
}

export default Drawer;
