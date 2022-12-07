import React, { useState } from "react";
import { getUserLogged, updateSocial } from "../../utils/network-data";
import SubmitButton from "./SubmitButton";

function SocialProfiles() {
  const [isData, setData] = useState([]);
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  React.useEffect(() => {
    async function getUser() {
      const { data } = await getUserLogged();
      setData(data);
      setTwitter(data.social[0].twitter)
      setFacebook(data.social[1].facebook)
      setInstagram(data.social[2].instagram)
      setGithub(data.social[3].github)
      setLinkedin(data.social[4].linkedin)

    }
    getUser();
    
  }, []);
  
  React.useEffect(() => {
    setData({
      ...isData,
      social: [
        { twitter: twitter },
        { facebook: facebook },
        { instagram: instagram },
        { github: github },
        {linkedin: linkedin}
      ],
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitter, facebook, instagram, github, linkedin]);

  async function onUpdateHandler() {
    const { error } = await updateSocial(isData);
    if (!error) {
      console.log("Berhasil");
    }
  }

  function onTwitterChange(e) {
    setTwitter(e.target.value);
  }

  function onFacebookChange(e) {
    setFacebook(e.target.value);
  }

  function onInstagramrChange(e) {
    setInstagram(e.target.value);
  }

  function onGithubChange(e) {
    setGithub(e.target.value);
  }

  function onLinkedinChange(e) {
    setLinkedin(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col my-10 sm:my-0">
        <label htmlFor="twitter">Twitter</label>
        <input
          id="twitter"
          value={twitter || ''}
          onChange={onTwitterChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="facebook" className="mt-5">
          Facebook
        </label>
        <input
          id="facebook"
          value={facebook || ''}
          onChange={onFacebookChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="instagram">Instagram</label>
        <input
          id="instagram"
          value={instagram || ''}
          onChange={onInstagramrChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="github" className="mt-5">
          GitHub
        </label>
        <input
          id="github"
          value={github || ''}
          onChange={onGithubChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
        <label htmlFor="linkedin" className="mt-5">
          LinkedIn
        </label>
        <input
          id="linkedin"
          value={linkedin || ''}
          onChange={onLinkedinChange}
          className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"
        />
      </div>
      <SubmitButton updateHandler={onUpdateHandler} />
    </>
  );
}

export default SocialProfiles;
