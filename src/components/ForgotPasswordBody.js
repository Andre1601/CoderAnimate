import React from "react";
import {Link} from "react-router-dom"

function ForgotPasswordBody() {
  return (
    <>
      <main className="bg-gradient-to-b from-purple-300 to-white rounded-3xl mx-8 md:mx-32 mt-10 p-10 md:p-32">
        <header className="text-center">
          <h1 className="font-bold text-4xl mb-4">Forgot Your Password?</h1>
          <p className="text-gray-500">Don’t worry! Resetting your password is easy. Just type in the email you registered</p>
        </header>
        <form className="mt-8">
          <div className="flex flex-col my-8">
            <label>Email</label>
            <input className="border-2 border-gray-300 rounded-md p-2" placeholder="Enter your email address" required type={"email"} />
          </div>
          <div className="flex flex-col my-8">
            <button className="bg-purple-700 text-white font-bold rounded-md p-2 mb-4 w-full">SEND</button>
            <p className="text-center">Did you remember your password ? <Link to='/login' className="text-purple-700 font-semibold" href="">Try logging in</Link></p>
          </div>
        </form>
      </main>
    </>
  );
}

export default ForgotPasswordBody;