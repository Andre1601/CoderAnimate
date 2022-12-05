import React from "react";
import Detail from "./Card/Detail";
import Thumbnail from "./Card/Thumbnail";

function CardItem() {
  return (
    <div className="card w-[350px] h-full rounded-2xl overflow-hidden shadow-lg mx-auto ">
        <Thumbnail/> 
        <Detail/>
    </div>
  );
}

export default CardItem;
