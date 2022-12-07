import React from "react";

function Description({data}) {
  return (
    <p className="my-5 px-2">{data.description}</p>
  );
}

export default Description;
