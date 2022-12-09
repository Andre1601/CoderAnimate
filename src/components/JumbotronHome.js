import React from "react";
import LatestSearch from "./Home/LatestSearch";
import Search from "./Home/Search";

function JumbotronHome() {
  return (
    <div className="jumbroton flex items-center justify-center w-full bg-[#B8B5FF] py-10 px-3">
      <div className="w-full sm:w-4/5 md:w-3/5 xl:w-1/2">
        <h1 className="text-[25px] font-bold text-center">
          The place where all the css animation <br></br> designs in the world
        </h1>
        <h2 className="text-[14px] text-center font-light pt-3">
          Many expert developers have joined CoderAnimate <br></br> so find
          thousands of designs here
        </h2>
        <Search />
        {/* <LatestSearch /> */}
      </div>
    </div>
  );
}

export default JumbotronHome;
