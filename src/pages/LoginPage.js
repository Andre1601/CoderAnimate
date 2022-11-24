import React from "react";
import HeaderLoginPage from "../components/HeaderLoginPage";
import LoginBody from "../components/LoginBody";
import LoginImage from "../assets/image/login.png";
import FooterPage from "../components/FooterPage";

function LoginPage() {
  return (
    <>
      <HeaderLoginPage/>
      <div className="flex w-full h-full">
        <div className="flex  flex-col m-auto  ">
          <LoginBody />
        </div>
        <div className="hidden w-1/2 md:block">
          <img src={LoginImage} className="w-full object-cover h-[650px]  mx-auto my-auto"  alt="login image"/>
        </div>
      </div>
        <FooterPage/>
    </>
  );
}

export default LoginPage;