import React from "react";
import InputRegister from "./Register/InputRegister";
import img from "../assets/image/register.png";

function RegisterBody() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/2 h-screen hidden md:block">
          <img src={img} className="object-contain h-[635px] mx-auto my-auto"/>
        </div>
        <div className="w-full md:w-1/2 bg-white py-20 px-10 col-span-2">
          <InputRegister />
        </div>
      </div>
    </>
  );
}
export default RegisterBody;
