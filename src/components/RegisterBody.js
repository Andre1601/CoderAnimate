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
      navigate('/login');
    }
  }

  return (
    <>
    <div className="flex items-center mx-auto justify-center min-h-screen overflow-hidden">
      <div className="w-1/2 h-full hidden md:block">
        <img src={img} className="object-contain h-[500px]  mx-auto my-auto" alt="register img"/>
      </div>
      <div className=" w-full justify-center max-w-[400px] lg:w-1/2 bg-white ">
        <InputRegister onSubmit={onRegisterHandler} />
      </div>
    </div>
  </>
  );
}
export default RegisterBody;
