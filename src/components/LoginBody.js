import React from "react";
import InputLogin from "./Login/InputLogin";

function LoginBody() {
  return (
    <>
      <main className=" h-screen mx-8 mt-20 md:m-32">
        <header>
          <h1 className="text-4xl mb-4">Welcome Back</h1>
          <p className="text-gray-500">Welcome back! Please enter your detail.</p>
        </header>
        <InputLogin />
      </main>
    </>
  );
}

export default LoginBody;