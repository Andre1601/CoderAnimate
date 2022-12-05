import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Status from "./Status";

function Detail() {
  return (
    <div className=" px-5 py-4 mx-auto flex justify-between items-center ">
        <Profile/>
        <Status/>
    </div>
  );
}

export default Detail;
