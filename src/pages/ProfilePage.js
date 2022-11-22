import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import ProfileBody from "../components/ProfileBody";
import FooterPage from "../components/FooterPage";

function ProfilePage() {
    return (
        <div>
        <HeaderLogin/>
          <div className="w-full ">
            <ProfileBody/>
          </div>
        <FooterPage/>
        </div>
    )
}
export default ProfilePage;