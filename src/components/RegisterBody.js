import React from "react";
import InputRegister from "./Register/InputRegister";
import img from "../assets/image/register.png";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";

function RegisterBody() {

  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <>
    <div className="flex items-center mx-auto">
      <div className="w-1/2 hidden lg:block">
        <img src={img} className="w-[450px] object-contain h-[450px]  mx-auto my-auto" alt="register img"/>
      </div>
      <div className=" w-full justify-center max-w-[450px] lg:w-1/2 bg-white mx-auto p-6 ">
        <InputRegister onSubmit={onRegisterHandler} />
      </div>
    </div>
  </>
  );
}
export default RegisterBody;
