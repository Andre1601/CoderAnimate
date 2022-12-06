import React from "react";
import CardItem from "./CardItem";

function HomeBody({projects}) {
  return (
    <div className="grid grid-cols-fluid px-10 py-7 gap-y-10">
      {projects.map((project) => (
        <CardItem key={project.id} {...project} />
      ))}
    </div>
  );
}

export default HomeBody;
