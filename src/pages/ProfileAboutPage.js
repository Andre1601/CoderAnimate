import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import ProfileAboutBody from "../components/ProfileAboutBody";
import FooterPage from "../components/FooterPage";

function ProfileAboutPage(){
    return(
        <>
        <HeaderLogin/>
       <ProfileAboutBody/>
       <FooterPage/>
        </>
    )
}

export default ProfileAboutPage;