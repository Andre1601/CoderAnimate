import React from "react";
import InputRegister from "./Register/InputRegister";

function RegisterBody(){
    return(
        <>
        <div className="flex min-h-screen">
            <div className=" bg-black w-1/2 hidden md:block" style={{backgroundImage: `url("../images/Fill out-amico 2image-register.png")`}}>
            </div>
            <div className="w-full md:w-1/2 bg-white py-20 px-10 col-span-2" >
            <InputRegister/>
            </div>
        </div>
        </>
    )
}
export default RegisterBody;