import React from "react";
import { BsSearch } from "react-icons/bs";
import HeaderNotLogin from "../components/HeaderNotLogin";
import Contents from "../components/Contents";

function HomeNotLogin() {
  return (
    <main>
      <HeaderNotLogin />
      <div class="flex flex-col container mx-auto p-20 bg-[#B8B5FF] ">
        <div class="w-full px-4">
          <h1 class="text-[25px] font-bold text-center">
            The place where all the css animation <br></br> designs in the world
          </h1>
          <h2 class="text-[14px] text-center font-light pt-3">
            Many expert developers have joined CoderAnimate <br></br> so find
            thousands of designs here
          </h2>
        </div>
        <div>
          <form action="" class="relative w-max mx-auto pt-5">
            <input
              type="search"
              name="search"
              id="search"
              class="relative bg-transparent rounded-full border cursor-auto outline-none pl-20 h-8
                        focus:w-full focus:border-[#7868E6] focus:cursor-text focus:pl-20 focus:pr-4"
            ></input>
            <div class="absolute inset-y-0 my-5 stroke-gray-500 py-2 h-20 w-12 px-4 border-r border-transparent peer-focus:border-lime-300 peer-focus:stroke-amber-300">
              <BsSearch />
            </div>
          </form>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-2 aspect-[4/3] sm:grid-cols-1 md:grid-cols-2">
        <Contents />
        <Contents />
        <Contents />
      </div>
    </main>
  );
}

export default HomeNotLogin;
