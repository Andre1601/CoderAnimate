import React from "react";
import Detail from "./Card/Detail";
import Thumbnail from "./Card/Thumbnail";

function CardItem() {
  return (
    <div className="w-72 h-full rounded-2xl overflow-hidden shadow-lg mx-auto sm:mx-0">
        <Thumbnail/>
        <Detail/>
    </div>
  );
}

export default CardItem;
