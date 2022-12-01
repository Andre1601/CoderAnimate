import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import FooterPage from "../components/FooterPage";
import SearchPageBody from "../components/SearchPageBody";

function SearchPage() {
  return (
    <>
      <HeaderLogin />
      <SearchPageBody/>
      <FooterPage/>
    </>
  );
}

export default SearchPage;
