import React from "react";

function Search() {
  return (
    <form>
      <div className="flex justify-center mt-7">
        <input
          type="search"
          className="rounded-full  bg-[#EDEEF7] border w-4/5 outline-none p-3 pl-7 md:max-w-md text-xl"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default Search;
