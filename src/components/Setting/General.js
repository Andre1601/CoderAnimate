import React from "react";
import { useState } from "react";
import { getUserLogged, updateGeneral } from "../../utils/network-data";
import SubmitButton from "./SubmitButton";

function General() {
  const [isData, setData] = useState("");

  React.useEffect(() => {
    async function getUser() {
      const { data } = await getUserLogged();
      setData(data);
    }
    getUser();
  }, []);

  async function onUpdateHandler() {
    const { error } = await updateGeneral(isData);
    if (!error) {
      console.log('Berhasil');
    }
  }

  function onEmailChange(e) {
    setData({
      ...isData,
      email: e.target.value,
    });
  }

  return (
    <>
      <div className="flex flex-col my-10 sm:my-0">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={isData.username || ""}
          className=" bg-slate-100 border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
          disabled="disabled"
        />
        <label htmlFor="email" className="mt-5">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={isData.email || ""}
          onChange={onEmailChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
      </div>
      <SubmitButton updateHandler={onUpdateHandler} />
    </>
  );
}

export default General;
