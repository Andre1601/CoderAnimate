import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import ProfileBody from "../components/ProfileBody";

function ProfilePage() {
    return (
        <>
        <HeaderLogin/>
        <div className=" w-full ">
          <ProfileBody/>
        </div>
        </>
    )
}
export default ProfilePage;