import React from "react";
import ProfileUser from "./profile/ProfileUser";
import ProfileBiography from "./profile/ProfileBiography";
import ProfileCollection from "./profile/ProfileCollection";
import ProfileSocial from "./profile/ProfileSosial";
function ProfileAboutBody(){
    return(
        <>
        <ProfileUser/>
        <ProfileCollection/>
        <ProfileBiography/>
        <ProfileSocial/>
        </>
    )
}
export default ProfileAboutBody;
