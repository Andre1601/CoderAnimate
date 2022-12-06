import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AccountSettingBody from "../components/AccountSettingBody";
import HeaderLogin from "../components/HeaderLogin";
import { updateUser } from "../utils/network-data";

function AccountSettingPage() {
  const [selected, setSelected] = useState("General");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/setting/edit') { setSelected('Edit Profile') }
    else if (location.pathname === '/setting/password') { setSelected('Password') }
    else if (location.pathname === '/setting/password') { setSelected('Social Profiles') }
  }, []);

  return (
    <>
      <HeaderLogin />
      <AccountSettingBody selected={selected} setSelected={setSelected} />
    </>
  );
}

export default AccountSettingPage;
