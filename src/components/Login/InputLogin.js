import React from "react";
import {Link} from "react-router-dom";

function InputLogin() {
  return (
    <>
      <form action="">
        <div className="flex flex-col my-8">
          <label className="font-bold">Email</label>
          <input type={"email"} className="border-2 border-gray-300 rounded-md p-2" required/>
        </div>
        <div className="flex flex-col my-8">
          <label className="font-bold">Password</label>
          <input className="border-2 border-gray-300 rounded-md p-2" required />
        </div>
        <div className="flex flex-col my-8 items-end">
          <Link to="/forgotpassword" className="text-purple-500 mb-2 font-semibold">Forgot Password?</Link>
          <button className="bg-purple-700 text-white rounded-md p-2 w-full">Sign In</button>
        </div>
        <div className="flex flex-col my-8">
          <p className="text-center">Don't have an account? <Link to="/register" className="text-purple-700 font-semibold"> Register</Link></p>
        </div>
      </form>
    </>
  );
}

export default InputLogin;