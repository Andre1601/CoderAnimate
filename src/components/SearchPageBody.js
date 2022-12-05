import React from "react";
import CardItem from "./CardItem";

function SearchPageBody() {
  return (
    <main>
      <div className="flex flex-col mx-auto py-20 bg-slate-400 ">
        <div className="w-full px-4">
          <h1 className="font-bold text-center text-[40px] md:text-[60px] ">
            Search Component
          </h1>
          <div className="text-[25px] text-center font-light pt-3">
            The place where all the css animation design <br></br> in the world
          </div>
        </div>
        <form
          action=""
          className=" flex justify-center relative  w-full  mx-auto inset-y-[120px] pt-5"
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className=" rounded-full border bg-[#EDEEF7] w-4/5 outline-none p-6 md:w-1/2 md: "
          />
        </form>
      </div>
      <div className=" grid grid-cols-fluid px-10 pt-20 pb-7 gap-y-10">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
    </main>
  );
}

export default SearchPageBody;
