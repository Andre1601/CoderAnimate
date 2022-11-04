import React from "react";
import InputRegister from "./Register/InputRegister";
import img from "../assets/image/register.png";

function RegisterBody() {
  return (
    <>
      <div className="flex items-center m-5 justify-center min-h-screen">
        <div className="w-1/2 h-screen hidden md:block">
          <img src={img} className="object-contain h-[635px]  mx-auto my-auto"/>
        </div>
        <div className=" w-full max-w-[400px] lg:w-1/2 bg-white ">
          <InputRegister />
        </div>
      </div>
    </>
  );
}
export default RegisterBody;
