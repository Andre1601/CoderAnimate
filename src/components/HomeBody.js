import React from "react";
import CardItem from "./CardItem";

function HomeBody() {
  return (
    <div className="grid grid-cols-fluid px-10 py-7 gap-y-10">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
}

export default HomeBody;
