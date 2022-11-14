import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountSettingPage from "./pages/AccoutSettingPage";
import ForgotPassword from "./pages/ForgotPassword";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UploadCodePage from "./pages/UploadCodePage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileAboutPage from "./pages/ProfileAboutPage";
function App() {
  return (
    <>
    <ProfilePage/>
      {/* <Routes>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profileAbout" element={<ProfileAboutPage/>}/>
      </Routes> */}
    </>
  );
}

export default App;
