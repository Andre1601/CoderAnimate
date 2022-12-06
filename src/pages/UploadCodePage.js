import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import UploadCodeBody from "../components/UploadCodeBody";
import FooterPage from "../components/FooterPage";
import { useNavigate } from "react-router-dom";
import { uploadProject } from "../utils/network-data";

function UploadCodePage() {

  const navigate = useNavigate();

  async function onUploadHandler(user) {
    const { error } = await uploadProject(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <>
      <HeaderLogin />
      <UploadCodeBody uploadHandler = {onUploadHandler} />
      <FooterPage />
    </>
  );
}

export default UploadCodePage;
