import React from "react";

function OutputDisplay({srcDoc}) {
  return (
    <div className="bg-white mt-28 h-96 border-solid border-2 border-[#A5A5A5]">
      <iframe
        id="my_iframe"
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="1"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default OutputDisplay;
