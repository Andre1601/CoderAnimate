import React from "react";
import img from '../../assets/image/Profile.png'
function ProfilePost() {
    return(
        <>
            <div className=" flex flex-col items-center justify-center">
                <img src={img} className="object-contain mt-5 sm:h-[250px]"/>
                <span className="mt-8 text-blue-700 cursor-pointer"><a>Upload your first work</a></span>
            </div>
        </>
    )
}

export default ProfilePost;