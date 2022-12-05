import React from "react";
import DetailBody from "../components/DetailBody";
import HeaderLogin from "../components/HeaderLogin";
import HeaderNotLogin from "../components/HeaderNotLogin";

function DetailPage({ authedUser }) {
  
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
      <HeaderLogin />
      <DetailBody />
    </>
  );
}

export default DetailPage;
