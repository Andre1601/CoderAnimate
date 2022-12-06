import React, { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import HeaderNotLogin from "../components/HeaderNotLogin";
import HomeBody from "../components/HomeBody";
import JumbotronHome from "../components/JumbotronHome";
import { getAllProjects } from "../utils/network-data";

function HomePages({authedUser}) {

  const [projects, setProjects] = useState([]);

  React.useEffect(() => {
    getAllProjects().then(({ data }) => {
      setProjects(data);
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
      <HeaderLogin />
      <JumbotronHome/>
      <HomeBody projects={projects}/>
    </>
  );
}

export default HomePages;
