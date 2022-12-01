import React from "react";
import { Link } from "react-router-dom";

function ItemSearch() {
  return (
    <Link to="/search">
      <button className="bg-white rounded-full px-5 py-1 mr-2 ">Button</button>
    </Link>
  );
}

export default ItemSearch;
