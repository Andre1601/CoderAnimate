import React from "react";
import CodeEditor from "./Detail/CodeEditor";
import Description from "./Detail/Description";
import OutputDisplay from "./Detail/OutputDisplay";
import Theme from "./Detail/Theme";
import Toggle from "./Detail/Toggle";
import UserStatus from "./Detail/UserStatus";

function DetailBody() {
  return (
    <main className="px-5 sm:px-10 ">
      <h2 className="mt-8 text-xl sm:text-3xl">Title is...</h2>
      <UserStatus />
      <Toggle />
      <Theme />
      <CodeEditor />
      <OutputDisplay />
      <Description/>
      <button className="hidden sm:block bg-[#7868E6] px-9 py-2 mb-10 text-white rounded-2xl" >Back</button>
    </main>
  );
}

export default DetailBody;
