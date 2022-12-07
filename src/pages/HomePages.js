import React, { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import HeaderNotLogin from "../components/HeaderNotLogin";
import HomeBody from "../components/HomeBody";
import JumbotronHome from "../components/JumbotronHome";
import { getAllProjects } from "../utils/network-data";

function HomePages({authedUser ,logout}) {

  const [projects, setProjects] = useState([]);

  React.useEffect(() => {
    getAllProjects().then(({ post }) => {
      setProjects(post);
    });
  }, []);


  if (authedUser === null) {
    return (
      <>
        <HeaderNotLogin />
        <JumbotronHome/>
        <HomeBody projects={projects} />
      </>
    );
  }

  return (
    <>
      <HeaderLogin logout={logout} />
      <JumbotronHome/>
      <HomeBody projects={projects}/>
    </>
  );
}

export default HomePages;
