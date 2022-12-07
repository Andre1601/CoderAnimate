import React from "react";
import DetailBody from "../components/DetailBody";
import HeaderLogin from "../components/HeaderLogin";
import HeaderNotLogin from "../components/HeaderNotLogin";

function DetailPage({ authedUser, logout }) {
  
  if (authedUser === null) {
    return (
      <>
        <HeaderNotLogin />
        <DetailBody />
      </>
    );
  }

  return (
    <>
      <HeaderLogin logout={logout} />
      <DetailBody />
    </>
  );
}

export default DetailPage;
