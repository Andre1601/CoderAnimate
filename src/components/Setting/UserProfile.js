import React from "react";

function UserProfile() {
  return (
    <div className="grid grid-cols-[50px_1fr] gap-x-5">
      <div className="row-span-3 w-14 h-14 bg-orange-500 rounded-full"></div>
      <label for="image_uploads" className="w-fit">Choose Image</label>
      <input id="image_uploads" type="file" className="hidden bg-orange-500 w-min" />
      <button className="bg-[#7868E6] text-white rounded-xl w-[120px] mt-3 py-2">Upload Now</button>
    </div>
  );
}

export default UserProfile;
