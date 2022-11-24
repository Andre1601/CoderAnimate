import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import Contents from "../components/Contents";
import FooterPage from "../components/FooterPage";

function HomePage() {
  return (
    <>
      <HeaderLogin />
      <main>
        <div className="flex flex-col mx-auto py-20 bg-[#B8B5FF] ">
          <div className="w-full px-4">
            <h1 className="text-[25px] font-bold text-center">
              The place where all the css animation <br></br> designs in the
              world
            </h1>
            <h2 className="text-[14px] text-center font-light pt-3">
              Many expert developers have joined CoderAnimate <br></br> so find
              thousands of designs here
            </h2>
          </div>
          <form action="" className=" flex  w-full mx-auto pt-5 justify-center">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className=" rounded-full  bg-[#EDEEF7] border cursor-pointer w-4/5 outline-none p-4 md:max-w-md text-lg "
            />
          </form>
          <div className="flex py-3 mx-auto ">
            <h2 id="latest_search" className="px-4 py-2 font-medium">
              Latest Search
            </h2>
            <div className="flex flex-wrap justify-start">
            <div className="px-2 py-1">
              <button className="text-base bg-white px-3 rounded-full ">
                <div className="px-4 py-1">css</div>
              </button>
            </div>
            <div className="px-2 py-1">
              <button className="text-base bg-white px-3 rounded-full ">
                <div className="px-4 py-1">design</div>
              </button>
            </div>
            <div className="px-2 py-1">
              <button className="text-base bg-white px-3 rounded-full ">
                <div className="px-4 py-1">animation</div>
              </button>
            </div>
            <div className="px-2 py-1">
              <button className="text-base bg-white px-3 rounded-full ">
                <div className="px-4 py-1">button</div>
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 gap-2 aspect-[4/3] sm:grid-cols-1 md:grid-cols-2">
          <Contents />
          <Contents />
          <Contents />
        </div>
      </main>
      <FooterPage/>
    </>
  );
}

export default HomePage;
