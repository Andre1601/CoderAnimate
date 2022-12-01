import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import HomeBody from "../components/HomeBody";
import JumbotronHome from "../components/JumbotronHome";

function HomePages() {
  return (
    <>
      <HeaderLogin />
      <JumbotronHome/>
      <HomeBody/>
    </>
  );
}

export default HomePages;
