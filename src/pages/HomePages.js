import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import HeaderNotLogin from "../components/HeaderNotLogin";
import HomeBody from "../components/HomeBody";
import JumbotronHome from "../components/JumbotronHome";

function HomePages({authedUser}) {

  if (authedUser === null) {
    return (
      <>
        <HeaderNotLogin />
        <JumbotronHome/>
        <HomeBody/>
      </>
    );
  }

  return (
    <>
      <HeaderLogin />
      <JumbotronHome/>
      <HomeBody/>
    </>
  );
}

export default HomePages;
