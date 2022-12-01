import React from "react";
import ItemSearch from "./ItemSearch";

function LatestSearch() {
  return (
    <div className="flex flex-col sm:flex-row items-center mt-7">
      <h2 className="mr-3 mb-3 sm:mb-0">Latest Search</h2>
      <div>
        <ItemSearch />
        <ItemSearch />
        <ItemSearch />
        <ItemSearch />
      </div>
    </div>
  );
}

export default LatestSearch;
