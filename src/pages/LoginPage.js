import React from "react";
import HeaderLoginPage from "../components/HeaderLoginPage";
import LoginBody from "../components/LoginBody";
import LoginImage from "../assets/image/login.png";
import FooterPage from "../components/FooterPage";
import { login } from "../utils/network-data";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <>
      <HeaderLoginPage />
      <div className="flex w-full h-full">
        <div className="flex  flex-col m-auto  ">
          <LoginBody login={onLogin} />
        </div>
        <div className="hidden w-1/2 md:block">
          <img
            src={LoginImage}
            className="w-full object-cover h-[650px]  mx-auto my-auto"
            alt="login image"
          />
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default LoginPage;
