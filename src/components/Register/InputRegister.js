import React from "react";
import {Link} from  "react-router-dom";
function InputRegister() {
    return(
        <>
            <div>
                <p className="text-1xl mb-5" >START FOR FREE</p>
                <h1 className="text-4xl mb-5 font-bold">Create New Account</h1>
                </div>
                <div  className="flex mb-5">
                <span>Already A Member ?</span>
                <Link to="/login" className="ml-3 text-blue-500" href="#">Sign In</Link>
            </div>
              <form action="#">
                <div className="grid grid-cols-2 gap-5  ">
                    <input type={"text"} placeholder="Name" className="border border-gray-500 py-1 px-4 rounded-md"/>
                    <input type={"text"} placeholder="Username" className="border border-gray-500 py-1 px-4 rounded-md"/>
                </div>
                <div className="mt-5">
                    <input type={"email"} placeholder="Enter your email" className="border border-gray-500 py-1 px-4 w-full rounded-md"/>
                </div>
                <div className="mt-5">
                    <input type={"password"} placeholder="Password" className="border border-gray-500 py-1 px-4 w-full rounded-md"/>
                </div>
                <div className="mt-5">
                    <button className="w-full bg-purple-700 text-center py-1 text-white rounded-md" type="submit">Register</button>
                </div>
            </form>
        </>
    )
}

export default InputRegister;