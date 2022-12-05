import React from "react";
import { Link } from "react-router-dom";
import img from '../../assets/image/1.png'

function Thumbnail() {
  return (
    <div className="relative h-fit">
      <Link
        to="/detail"
        className="title_post flex absolute w-full h-full bg-black/20 text-center items-center z-10 top-[32] opacity-0 transition-all duration-300 rounded-t-2xl "
      >
        <h3 className=" text-white text-1xl font-bold mx-auto">Portfolio</h3>
      </Link>

      <img
        src="https://source.unsplash.com/600x400"
        alt="img caption"
        className="w-full h-52 cursor-pointer"
      />
    </div>
  );
}

export default Thumbnail;
