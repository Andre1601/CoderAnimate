import React from "react";
import { useState } from "react";

function Search() {

  const [keyword, setKeyword] = useState('');

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
  }


  return (
    <form action={`/search`}>
      <div className="flex justify-center mt-7">
        <input
          type="search"
          name="search" 
          className="rounded-full  bg-[#EDEEF7] border w-4/5 outline-none p-3 pl-7 md:max-w-md text-xl"
          placeholder="Search"
          value={keyword}
          onChange={(e) => onKeywordChangeHandler(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
