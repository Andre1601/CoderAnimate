import React, { useState } from "react";
import ProfileUser from "./profile/ProfileUser";
import ProfileCollection from "./profile/ProfileCollection";
import ProfilePost from "./profile/ProfilePost";
import { useParams } from "react-router-dom";
import { getProfile } from "../utils/network-data";

const ProfileBody = () => {
  const [dataUser, setDataUser] = useState("");

  let { username } = useParams();

  React.useEffect(() => {
    async function getUserData(username) {
      const { data } = await getProfile(username);
      setDataUser(data);
    }
    getUserData(username);
  }, []);

  return (
    <div className="">
      <ProfileUser dataUser={dataUser}/>
      <ProfileCollection dataUser={dataUser} />
    </div>
  );
};
export default ProfileBody;
