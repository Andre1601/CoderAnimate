import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import FooterPage from "../components/FooterPage";
import SearchPageBody from "../components/SearchPageBody";
import HeaderNotLogin from "../components/HeaderNotLogin";

function SearchPage({ authedUser }) {
  if (authedUser === null) {
    return (
      <>
        <HeaderNotLogin />
        <SearchPageBody />
        <FooterPage />
      </>
    );
  }

  return (
    <>
      <HeaderLogin />
      <SearchPageBody />
      <FooterPage />
    </>
  );
}

export default SearchPage;
