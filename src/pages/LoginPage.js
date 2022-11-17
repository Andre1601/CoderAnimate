import React from "react";
import HeaderLoginPage from "../components/HeaderLoginPage";
import LoginBody from "../components/LoginBody";
import LoginImage from "../assets/image/login.png";

function LoginPage() {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col">
          <HeaderLoginPage  />
          <LoginBody />
        </div>
        <div className="hidden md:block">
          <img src={LoginImage} className="object-cover h-screen w-full" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;