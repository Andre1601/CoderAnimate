/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

function Contents() {
  return (
    <main>
      <div className="container mx-auto px-3 py-8 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        <div className="rounded-2xl shadow-lg overflow-hidden ">
          <img
            src="https://source.unsplash.com/600x400"
            alt="image caption"
            className="w-auto rounded-b-2xl"
          />
          <div className="px-1 py-4 mx-auto flex justify-between">
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            <div className="font-thin text-xl mb-2 text-slate-700 px-1 py-1 flex-auto">
              Irham Kamil
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
