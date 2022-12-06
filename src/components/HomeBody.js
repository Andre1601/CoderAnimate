import React from "react";
import CardItem from "./CardItem";

function HomeBody({projects}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 py-5 gap-y-4">
      {projects.map((project) => (
        <CardItem key={project.id} {...project} />
      ))}
    </div>
  );
}

export default HomeBody;
