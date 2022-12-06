import React from "react";
import ProfileUser from "./profile/ProfileUser";
import ProfileCollection from "./profile/ProfileCollection";
import ProfilePost from "./profile/ProfilePost";

const ProfileBody = () => {
    return(
        <div>
        <ProfileUser/>
        <ProfileCollection/>
        </div>
    )
}
export default ProfileBody;