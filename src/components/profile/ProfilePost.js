import React, { useState } from "react";
import img from "../../assets/image/Profile.png";
import { Link, useParams } from "react-router-dom";
import { getAllProjects, getProfile } from "../../utils/network-data";
import CardItem from "../CardItem";
import FooterPage from "../FooterPage";
function ProfilePost() {
  const [posts, setPosts] = useState('');

  let { username } = useParams();

  React.useEffect(() => {
    async function getUserData(username) {
      const { data } = await getProfile(username);
      const { post } = await getAllProjects();

      post.forEach((item) => {
        if (item.uid === data.id) {
          setPosts((arr) => [...arr, item]);
        }
      });

    }
    getUserData(username);
  }, []);

  
  if (!posts) {
    return (
        <>
          <div className="flex flex-col items-center md:mr-28 my-16 lg:my-0">
            <img
              src={img}
              className="object-contain mt-5 sm:h-[250px] "
              alt="profile"
            />
            <Link to="/upload" className="mt-8 text-blue-700 cursor-pointer">
              Upload your first work
            </Link>
          </div>
        </>
      );
}

return (
  <>
  <div className=" md:relative md:right-[161px] my-auto w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 py-5 gap-y-4">
    {posts.map((post) => {
      return <CardItem className key={post.id} {...post} />;
    })}
  </div>
  </>
);

}

export default ProfilePost;
