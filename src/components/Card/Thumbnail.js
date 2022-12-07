import React, { useState } from "react";
import { getProject } from "../../utils/network-data";

function Thumbnail({ detailHandler, id }) {

  const [dataPost, setDataPost] = useState('');

  React.useEffect(() => {
    async function getPostData(id) {
      const { data } = await getProject(id);
      setDataPost(data)
    }
    getPostData(id)
  },[])

  return (
    <div className="relative h-fit">
      <div className="title_post flex absolute w-full h-full bg-black/20 text-center items-center z-10 top-[32] opacity-0 transition-all duration-300 rounded-t-2xl " onClick={detailHandler}>
        <h3 className=" text-white text-1xl font-bold mx-auto">{dataPost.title}</h3>
      </div>

      <img
        src="https://source.unsplash.com/600x400"
        alt="img caption"
        className="w-full h-52 cursor-pointer"
      />
    </div>
  );
}

export default Thumbnail;
