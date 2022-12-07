import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../utils/network-data";
import ProfileBiography from "./profile/ProfileBiography";
import ProfileSocial from "./profile/ProfileSosial";
function ProfileAboutBody() {
  const [userData, setUserData] = useState("");

  let { username } = useParams();

  React.useEffect(() => {
    async function getUserData(username) {
      const { data } = await getProfile(username);
      setUserData(data)
    }
    getUserData(username);
  }, []);
  
  return (
    <div className="grid sm:grid-cols-2">
      <ProfileBiography data={userData} />
      <ProfileSocial data={userData} />
    </div>
  );
}
export default ProfileAboutBody;
