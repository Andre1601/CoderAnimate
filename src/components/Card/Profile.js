import React from "react";
import { Link } from "react-router-dom";

function Profile({data}) {
  return (
    <Link to={`/profile/${data.username}`} className="flex items-center">
      <img
        src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
        alt="Profile Avatar"
        className="w-10 h-10 rounded-full bg-gray-400 mr-2"
      />
      <h2>{data.name || ''}</h2>
    </Link>
  );
}

export default Profile;
