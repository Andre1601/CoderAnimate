import React from "react";
import ProfileUser from "./profile/ProfileUser";
import ProfilePost from "./profile/ProfilePost";
import ProfileCollection from "./profile/ProfileCollection";
function ProfileBody(){
    return(
        <>
        <ProfileUser/>
        <ProfileCollection/>
        <ProfilePost/>
        </>
    )
}
export default ProfileBody;