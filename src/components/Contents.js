/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import {Link} from 'react-router-dom';

function Contents() {
  return (
    <main>
      <div className="container mx-auto px-3 py-8 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <div className=" relative w-92 h-fit">
            <Link to="/detail" className="title_post flex absolute w-full h-full bg-black/20 text-center items-center z-10 top-[32] opacity-0 transition-all duration-300 rounded-2xl ">
              <p className=" text-white text-1xl font-bold mx-auto">Portfolio</p>
            </Link>

            <img
              src="https://source.unsplash.com/600x400"
              alt="image caption"
              className="w-auto rounded-b-2xl cursor-pointer"
            />
        </div>
          <div className="px-1 py-4 mx-auto flex justify-between ">
            <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="Profile Avatar" className="w-10 h-10 rounded-full bg-gray-400"/>
            <div className="font-thin text-xl mb-2 text-slate-700 px-1 py-1 flex-auto">
             <Link to="/profile" >Irham Kamil</Link> 
            </div>
            <div className="flex px-7">
              <div className="py-3">
                <AiFillHeart />
              </div>
              <span className="py-2">40</span>
            </div>
            <div className="flex px-3">
              <div className="py-3">
                <AiFillEye />
              </div>
              <span className="py-2">30</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contents;
