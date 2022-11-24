import React, { useState } from "react";
import AccountSettingBody from "../components/AccountSettingBody";
import HeaderLogin from "../components/HeaderLogin";

function AccountSettingPage() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <>
      <HeaderLogin />
      <AccountSettingBody selected={selected} setSelected={setSelected} />
    </>
  );
}

export default AccountSettingPage;
