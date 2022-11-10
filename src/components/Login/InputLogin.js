import React from "react";

function InputLogin() {
  return (
    <>
      <form action="">
        <div className="flex flex-col my-8">
          <label className="font-bold">Email</label>
          <input className="border-2 border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex flex-col my-8">
          <label className="font-bold">Password</label>
          <input className="border-2 border-gray-300 rounded-md p-2" />
        </div>
        <div className="flex flex-col my-8 items-end">
          <a className="text-purple-500 mb-2 font-semibold" href="#">Forgot Password?</a>
          <button className="bg-purple-700 text-white rounded-md p-2 w-full">Sign In</button>
        </div>
        <div className="flex flex-col my-8">
          <p className="text-center">Don't have an account? <a className="text-purple-700 font-semibold" href="#">Register</a></p>
        </div>
      </form>
    </>
  );
}

export default InputLogin;