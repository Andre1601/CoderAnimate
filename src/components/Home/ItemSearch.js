import React from "react";
import { Link } from "react-router-dom";

function ItemSearch() {
  return (
    <Link to="/search?search=button">
      <button className="bg-white rounded-full px-5 py-1 mr-2 mt-4 hover:bg-slate-400 duration-200 ">Button</button>
    </Link>
  );
}

export default ItemSearch;
