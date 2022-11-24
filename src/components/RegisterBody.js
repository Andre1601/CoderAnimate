import React from "react";
import InputRegister from "./Register/InputRegister";
import img from "../assets/image/register.png";

function RegisterBody() {
  return (
    <>
    <div className="flex items-center mx-auto justify-center min-h-screen overflow-hidden">
      <div className="w-1/2 h-full hidden md:block">
        <img src={img} className="object-contain h-[500px]  mx-auto my-auto" alt="register picture"/>
      </div>
      <div className=" w-full justify-center max-w-[400px] lg:w-1/2 bg-white ">
        <InputRegister />
      </div>
    </div>
  </>
  );
}
export default RegisterBody;
