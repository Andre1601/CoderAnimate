import React from "react";
import img from '../../assets/image/Profile.png'
import {Link} from 'react-router-dom';
function ProfilePost() {
    return(
        <>
            <div className="flex flex-col items-center md:mr-28 my-16 lg:my-0">
                <img src={img} className="object-contain mt-5 sm:h-[250px] " alt="profile"/>
                <Link to="/upload" className="mt-8 text-blue-700 cursor-pointer">Upload your first work</Link>
            </div>
        </>
    )
}

export default ProfilePost;