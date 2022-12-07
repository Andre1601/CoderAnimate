import React, { useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../utils/network-data";
import Profile from "./Profile";
import Status from "./Status";

function Detail({dataUser}) {

  return (
    <div className=" px-5 py-4 mx-auto flex justify-between items-center ">
        <Profile data={dataUser} />
        <Status/>
    </div>
  );
}

export default Detail;
