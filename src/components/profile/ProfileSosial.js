import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { RiFolderUserFill } from "react-icons/ri";
import { showFormattedDate } from "../../utils/format-date";

function ProfileSocial({ data }) {
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  React.useEffect(() => {
    if (data.social) {
      setTwitter(data.social[0].twitter || "");
      setFacebook(data.social[1].facebook || "");
      setInstagram(data.social[2].instagram || "");
      setGithub(data.social[3].github || "");
      setLinkedin(data.social[4].linkedin || "");
    }
  }, [data]);

  return (
    <div className="flex flex-col sm:flex-col justify-self-end sm:justify-between my-6 ">
      <div className="ml-5 max-w-sm md:w-72 bg-slate-400 rounded-lg p-4 mt-5 m-3">
        <div className="flex mb-2">
          <GrLocationPin className="mx-2" />
        </div>

        <div className="flex">
          <RiFolderUserFill className="mx-2" />
          <p className="text-sm">
            Member since {showFormattedDate(data.createdAt)}
          </p>
        </div>
      </div>
      {/* <div className="Follow mt-5">
        <div className="bg-black align-center w-full md:w-96 md:mt-10 h-px "></div>
        <div className=" flex justify-center  md:mr-10">
          <span className="max-w-lg m-auto ml-10 sm:ml-10">
            Followers <p>(99)</p>
          </span>
          <span className="max-w-lg ml-6 m-auto sm:ml-10">
            Following<p>(99)</p>
          </span>
        </div>
      </div> */}
      <div className="border-2 m-5 p-5 max-w-sm md:w-72 rounded-md">
        <div className="flex items-baseline justify-between mb-5">
          <p className="text-2xl">Social</p>
        </div>
        {twitter ? (
          <div className="flex w-fit mb-3">
            <FaTwitter className="my-auto mr-2" />
            <a
              href="https://react-icons.github.io/react-icons/search?q=twitter"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        ) : (
          ""
        )}
        {facebook ? (
          <div className="flex w-fit mb-3">
            <FaFacebook className="my-auto mr-2" />
            <a
              href="https://react-icons.github.io/react-icons/search?q=twitter"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        ) : (
          ""
        )}
        {instagram ? (
          <div className="flex w-fit mb-3">
            <FaInstagram className="my-auto mr-2" />
            <a
              href="https://react-icons.github.io/react-icons/search?q=twitter"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        ) : (
          ""
        )}
        {github ? (
          <div className="flex w-fit mb-3">
            <FaGithub className="my-auto mr-2" />
            <a
              href="https://react-icons.github.io/react-icons/search?q=twitter"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        ) : (
          ""
        )}
        {linkedin ? (
          <div className="flex w-fit mb-3">
            <FaLinkedin className="my-auto mr-2" />
            <a
              href="https://react-icons.github.io/react-icons/search?q=twitter"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default ProfileSocial;
