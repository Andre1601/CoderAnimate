import React from "react";
import { Link } from "react-router-dom";

function PopupMenu({logout, username}) {
  return (
    <div>
      <ul className="hidden w-32 bg-white text-[#7868E6] leading-none group-hover:block absolute text-[12px] rounded-md">
        <li className="hover:bg-slate-300 mt-3 px-2 py-2">
          <Link to={`/profile/${username}`}>Profile</Link>
        </li>
        <li className="hover:bg-slate-300 px-2 py-2">
          <Link to="/setting/edit">Edit Profile</Link>
        </li>
        <li className="hover:bg-slate-300 px-2 py-2">
          <Link to="/setting/general">Account Setting</Link>
        </li>
        <li className="hover:bg-slate-300 mt-6 mb-3 px-2 py-2">
          <Link to="/login" onClick={logout}>Sign Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default PopupMenu;
