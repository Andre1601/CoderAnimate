import React, { useState } from "react";
import { getUserLogged, updateProfile } from "../../utils/network-data";
import SubmitButton from "./SubmitButton";
import UserProfile from "./UserProfile";

function EditProfile() {
  const [isData, setData] = useState("");

  React.useEffect(() => {
    async function getUser() {
      const { data } = await getUserLogged();
      setData(data);
    }
    getUser();
  }, []);

  async function onUpdateHandler() {
    const { error } = await updateProfile(isData);
    if (!error) {
      console.log('Berhasil');
    }
  }

  function onNameChange(e) {
    setData({
      ...isData,
      name: e.target.value,
    });
  }

  function onLocationChange(e) {
    setData({
      ...isData,
      location: e.target.value,
    });
  }

  function onBioChange(e) {
    setData({
      ...isData,
      bio: e.target.value,
    });
  }

  return (
    <>
      <div className="flex flex-col my-10 sm:my-0">
        <UserProfile />
        <label htmlFor="name" className="mt-7">
          Name
        </label>
        <input
          id="name"
          value={isData.name || ""}
          onChange={onNameChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="location" className="mt-5">
          Location
        </label>
        <input
          id="location"
          value={isData.location || ""}
          onChange={onLocationChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="bio" className="mt-5">
          Bio
        </label>
        <textarea
          id="bio"
          rows="3"
          value={isData.bio || ""}
          onChange={onBioChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-1 px-3 w-full mt-2 resize-none"
        />
      </div>
      <SubmitButton updateHandler={onUpdateHandler} />
    </>
  );
}

export default EditProfile;
