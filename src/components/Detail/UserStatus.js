import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { like } from "../../utils/network-data";

function UserStatus({ data, post }) {
  const [liked, setLiked] = useState(post.liked || "");

  React.useEffect(() => {
    if (post || liked) {
      setLiked(post.liked);
      console.log(liked);
    }
  }, [post, liked]);

  async function likedPost() {
    await like(post.id)
  }
 
  return (
    <div className="grid grid-cols-[70px_1fr_90px] mt-3 ">
      <Link to={`/profile/${data.username}`}>
        <img
          alt=""
          src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          className="block w-14 h-14 rounded-full"
        />
      </Link>
      <div>
        <h3>{data.name}</h3>
        <button className="text-[#7868E6]">Follow</button>
      </div>
      {!liked.includes(data.username) ? (
        <button
          className="flex justify-center items-center  bg-[#7868E6] h-[40px] p-3 rounded-2xl m-3 mx-auto text-white leading-[0.8]"
          onClick={likedPost}
        >
          <BsFillHeartFill className="m-2" />
          <h3 className="m-2">Like</h3>
        </button>
      ) : (
        <button
          className="flex justify-center items-center  bg-[#7868E6] h-[40px] p-3 rounded-2xl m-3 mx-auto text-white leading-[0.8]"
          onClick={likedPost}
        >
          <BsFillHeartFill className="m-2" />
          <h3 className="m-2">Unlike</h3>
        </button>
      )}
    </div>
  );
}

export default UserStatus;
