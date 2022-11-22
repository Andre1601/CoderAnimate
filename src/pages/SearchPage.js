import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import Contents from "../components/Contents";
import { BsSearch } from "react-icons/bs";
import FooterPage from "../components/FooterPage";

function SearchPage() {
  return (
    <>
      <HeaderLogin />
      <main>
        <div className="flex flex-col mx-auto py-20 bg-slate-400 ">
          <div className="w-full px-4">
            <h1 className="font-bold text-center text-[40px] md:text-[60px] ">Search Component</h1>
            <div className="text-[25px] text-center font-light pt-3">
              The place where all the css animation design <br></br> in the
              world
            </div>
          </div>
          <form action="" className=" flex justify-center relative  w-full  mx-auto inset-y-[120px] pt-5">
          <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className=" rounded-full border bg-[#EDEEF7] cursor-pointer w-4/5 outline-none p-6 md:w-1/2 md: "
            />
          </form>
        </div>
        <div className=" grid lg:grid-cols-3 gap-2 aspect-[4/3] sm:grid-cols-1 md:grid-cols-2 pt-16">
          <Contents />
          <Contents />
          <Contents />
        </div>
      </main>
      <FooterPage/>
    </>
  );
}

export default SearchPage;
