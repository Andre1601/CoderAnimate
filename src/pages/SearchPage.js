import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import FooterPage from "../components/FooterPage";
import SearchPageBody from "../components/SearchPageBody";
import HeaderNotLogin from "../components/HeaderNotLogin";
import Contents from '../components/Contents';

function SearchPage({ authedUser, logout }) {
  if (authedUser === null) {
    return (
      <>
        <HeaderNotLogin />
        <SearchPageBody />
        <FooterPage />
      </>
    );
  }

  return (
    <>
      <HeaderLogin logout={logout} />
      <main>
        <div className="flex flex-col mx-auto py-20 bg-[#FAFAFA] ">
          <div className="w-full px-4">
            <h1 className="font-bold text-center text-[30px] md:text-[60px] ">Search Component</h1>
            <div className="text-[15px] text-center font-light pt-3">
              The place where all the css animation design <br></br> in the
              world
            </div>
          </div>
          <form action="" className=" flex justify-center relative  w-full  mx-auto inset-y-[120px] pt-5 ">
          <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className=" rounded-full border bg-[#EDEEF7] mb-4 cursor-pointer w-4/5 outline-none  p-4 md:w-1/2 text-lg sm:text-2xl"
            />
          </form>
        </div>
        <div className=" grid lg:grid-cols-3 gap-2 aspect-[4/3] sm:grid-cols-1 md:grid-cols-2 pt-16">
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
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
