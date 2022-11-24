import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import AccountSettingPage from "./pages/AccoutSettingPage";
import ForgotPassword from "./pages/ForgotPassword";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import UploadCodePage from "./pages/UploadCodePage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileAboutPage from "./pages/ProfileAboutPage";
import FooterPage from "./components/FooterPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/accountsetting" element={<AccountSettingPage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/uploadcode" element={<UploadCodePage/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profileAbout" element={<ProfileAboutPage/>}/>
        <Route path='/setting' element={<AccountSettingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
