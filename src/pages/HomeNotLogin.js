import React from "react";
import { BsSearch } from "react-icons/bs";
import HeaderNotLogin from "../components/HeaderNotLogin";
import Contents from "../components/Contents";

function HomeNotLogin() {
  return (
    <>
      <HeaderNotLogin />
      <main>
        <div class="flex flex-col mx-auto py-20 bg-[#B8B5FF] ">
          <div class="w-full px-4">
            <h1 class="text-[25px] font-bold text-center">
              The place where all the css animation <br></br> designs in the
              world
            </h1>
            <h2 class="text-[14px] text-center font-light pt-3">
              Many expert developers have joined CoderAnimate <br></br> so find
              thousands of designs here
            </h2>
          </div>
          <form action="" class=" relative w-max mx-auto pt-5">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="s"
              class="relative bg-white rounded-full border cursor-pointer outline-none pl-60 h-20"
            ></input>
            <div class="absolute inset-y-11 inset-x-8 font-semibold text-xl">
              <p>Search...</p>
            </div>
            <div class="absolute inset-y-[53px] inset-x-[380px]">
              <BsSearch />
            </div>
          </form>
          <div class="py-3 mx-auto flex">
            <h2 id="latest_search" class="px-4 py-2 font-medium">
              Latest Search
            </h2>
            <div class="px-2 py-1">
              <button class="text-base bg-white px-3 rounded-full ">
                <div class="px-4 py-1">css</div>
              </button>
            </div>
            <div class="px-2 py-1">
              <button class="text-base bg-white px-3 rounded-full ">
                <div class="px-4 py-1">design</div>
              </button>
            </div>
            <div class="px-2 py-1">
              <button class="text-base bg-white px-3 rounded-full ">
                <div class="px-4 py-1">animation</div>
              </button>
            </div>
            <div class="px-2 py-1">
              <button class="text-base bg-white px-3 rounded-full ">
                <div class="px-4 py-1">button</div>
              </button>
            </div>
          </div>
        </div>
        <div class=" grid lg:grid-cols-3 gap-2 aspect-[4/3] sm:grid-cols-1 md:grid-cols-2">
          <Contents />
          <Contents />
          <Contents />
        </div>
      </main>
    </>
  );
}

export default HomeNotLogin;
