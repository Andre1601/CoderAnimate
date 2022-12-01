import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function InputRegister({ onSubmit }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    onSubmit({ name, username, email, password });
  }

  return (
    <div className="mx-5">
      <div>
        <p className="text-1xl mb-5">START FOR FREE</p>
        <h1 className="text-4xl mb-5 font-bold">Create New Account</h1>
      </div>
      <div className="flex mb-5">
        <span>Already A Member ?</span>
        <Link to="/login" className="ml-3 text-blue-500" href="#">
          Sign In
        </Link>
      </div>
      <form action="#" onSubmit={onSubmitHandler}>
        <div className="grid grid-cols-2 gap-5  ">
          <input
            type={"text"}
            placeholder="Name"
            className="border border-gray-500 py-1 px-4 rounded-md"
            onChange={onNameChange}
          />
          <input
            type={"text"}
            placeholder="Username"
            className="border border-gray-500 py-1 px-4 rounded-md"
            onChange={onUsernameChange}
          />
        </div>
        <div className="mt-5">
          <input
            type={"email"}
            placeholder="Enter your email"
            className="border border-gray-500 py-1 px-4 w-full rounded-md"
            onChange={onEmailChange}
          />
        </div>
        <div className="mt-5">
          <input
            type={"password"}
            placeholder="Password"
            className="border border-gray-500 py-1 px-4 w-full rounded-md"
            onChange={onPasswordChange}
          />
        </div>
        <div className="mt-5">
          <button
            className="w-full bg-purple-700 text-center py-1 text-white rounded-md"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputRegister;
