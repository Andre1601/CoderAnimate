import React from "react";
import HeaderLoginPage from "../components/HeaderLoginPage";
import LoginBody from "../components/LoginBody";
import LoginImage from "../assets/image/login.png";
import { login } from "../utils/network-data";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="h-screen overflow-hidden">
      <HeaderLoginPage />
      <div className="flex">
        <div className="flex  flex-col m-auto sm:mt-[-80px] ">
          <LoginBody login={onLogin} />
        </div>
        <div className="hidden  w-1/2 lg:block sm:mt-[-80px] ">
          <img
            src={LoginImage}
            className="w-[800px] object-contain h-[600px]  mx-auto my-auto"
            alt="login image"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
