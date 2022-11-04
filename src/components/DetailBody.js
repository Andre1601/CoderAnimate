import React from "react";
import CodeEditor from "./Detail/CodeEditer";
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
    </main>
  );
}

export default DetailBody;
