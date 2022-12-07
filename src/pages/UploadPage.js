import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import UploadBody from "../components/UploadBody";
import FooterPage from "../components/FooterPage";

function UploadPage({logout}) {
    return (
        <div>
            <HeaderLogin logout={logout}/>
            <UploadBody/>
            <FooterPage/>
        </div>
    )
}


export default UploadPage;