import React, { useEffect, useState } from "react";
import AccountSettingBody from "../components/AccountSettingBody";
import HeaderLogin from "../components/HeaderLogin";

function AccountSettingPage() {
  const [selected, setSelected] = useState("General");

  // console.log(selected);

  // useEffect(() => {

  // }, [input]);

  return (
    <>
      <HeaderLogin />
      <AccountSettingBody selected={selected} setSelected={setSelected} />
    </>
  );
}

export default AccountSettingPage;
