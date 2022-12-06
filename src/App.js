import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AccountSettingPage from "./pages/AccoutSettingPage";
import ForgotPassword from "./pages/ForgotPassword";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePages from "./pages/HomePages";
import UploadCodePage from "./pages/UploadCodePage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileAboutPage from "./pages/ProfileAboutPage";
import General from "./components/Setting/General";
import EditProfile from "./components/Setting/EditProfile";
import Password from "./components/Setting/Password";
import SocialProfiles from "./components/Setting/SocialProfiles";
import ProfilePost from "../src/components/profile/ProfilePost";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  React.useEffect(() => {
    async function getUser() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    getUser();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<HomePages authedUser={authedUser} />} />
          <Route path="/detail/:username" element={<DetailPage authedUser={authedUser} />} />
          <Route path="/search" element={<SearchPage authedUser={authedUser} />} />
          <Route path="/profile" element={<ProfilePage authedUser={authedUser} />}>
            <Route path="/profile" element={<ProfilePost />} />
            <Route path="/profile/about" element={<ProfileAboutPage />} />
          </Route>
        </Routes>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<HomePages />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/accountsetting" element={<AccountSettingPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/uploadcode" element={<UploadCodePage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/profile" element={<ProfilePage />}>
        <Route path="/profile" element={<ProfilePost />} />
        <Route path="/profile/about" element={<ProfileAboutPage />} />
      </Route>
      <Route path="/setting" element={<AccountSettingPage />}>
        <Route index element={<General />} />
        <Route path="general" element={<General />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="password" element={<Password />} />
        <Route path="social" element={<SocialProfiles />} />
      </Route>
    </Routes>
  );
}

export default App;
