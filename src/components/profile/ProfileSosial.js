import React from "react";
import {Link} from "react-router-dom"

function ProfileSocial() {
    return(
            
        <div className="flex flex-col sm:flex-row sm:justify-between my-16 ">
            <div className="flex items-baseline justify-between border-2 m-5 p-5 max-w-sm md:w-1/4 rounded-md">
                <p className="text-2xl">Social</p>
                <Link to='/setting/social' className="cursor-pointer text-[#7868E6]">Add Social</Link>
            </div>

            <div className="Follow mt-5">
                <div className="bg-black align-center w-full md:w-96 md:mt-10 h-px "></div>
                <div className="m-auto md:mr-10">
                    <span  className="max-w-lg m-auto ml-10 sm:ml-10">Followers <p>(99)</p></span>
                    <span className="max-w-lg ml-6 sm:ml-10">Following<p>(99)</p></span>
                </div>
            </div>
        </div>
    )
}
export default ProfileSocial;