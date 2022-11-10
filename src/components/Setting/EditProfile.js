import React from "react";
import UserProfile from "./UserProfile";

function EditProfile() {
    return (
        <div className="flex flex-col my-10 sm:my-0">
            <UserProfile/>
            <label className="mt-7">Name</label>
            <input className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
            <label className="mt-5">Location</label>
            <input className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2"/>
            <label className="mt-5">Bio</label>
            <textarea rows="3" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-1 px-3 w-full mt-2 resize-none"/>
        </div>
    )
}


export default EditProfile;