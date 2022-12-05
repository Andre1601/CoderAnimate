import React from "react";

function ProfileUser() {
    return(
        <div className="flex flex-col px-8 h-1/4  sm:max-w-lg md:flex-row items-center lg:ml-28 ">
                <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="Profile Avatar" className="w-20 h-20 rounded-full shadow-md mt-5 md-mt-25 " />
                <div className="text-black ml-6">
                    <p className="font-bold text-2xl mb-3 mt-5 md:text-3xl md:mt-20">Irham Kamil</p>
                    <p className="text-sm mb-3 ">indonesia</p>
                    <button className="bg-[#7868E6] h-10 w-40 rounded-md ">Follow</button>
                </div>
        </div>
    )
}

export default ProfileUser;