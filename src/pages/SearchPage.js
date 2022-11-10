import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import Contents from "../components/Contents";
import { BsSearch } from "react-icons/bs";

function SearchPage() {
  return (
    <>
      <HeaderLogin />
      <main>
        <div class="flex flex-col mx-auto py-20 bg-slate-400 ">
          <div class="w-full px-4">
            <h1 class="font-bold text-center text-[60px]">Search Component</h1>
            <div class="text-[25px] text-center font-light pt-3">
              The place where all the css animation design <br></br> in the
              world
            </div>
          </div>
          <form action="" class=" relative w-max mx-auto inset-y-[120px] pt-5">
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
        </div>
        <div class=" grid lg:grid-cols-3 gap-2 aspect-[4/3] sm:grid-cols-1 md:grid-cols-2 pt-16">
          <Contents />
          <Contents />
          <Contents />
        </div>
      </main>
    </>
  );
}

export default SearchPage;
