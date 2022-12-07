import React, { useState } from "react";
import { updatePassword, verify } from "../../utils/network-data";
import SubmitButton from "./SubmitButton";

function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function onUpdateHandler() {
    const { error } = await verify({ password: oldPassword });
    if (!error && newPassword) {
      console.log("Berhasil");
      await updatePassword({ password: newPassword });
    } else {
      console.log("Gagal");
    }
  }

  function onOldPasswordChange(e) {
    setOldPassword(e.target.value);
  }

  function onNewPasswordChange(e) {
    setNewPassword(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col my-10 sm:my-0">
        <label htmlFor="old-password">Old Password</label>
        <input
          id="old-password"
          type="password"
          onChange={onOldPasswordChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="password" className="mt-5">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={onNewPasswordChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
      </div>
      <SubmitButton updateHandler={onUpdateHandler} />
    </>
  );
}

export default Password;
