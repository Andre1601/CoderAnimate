import React from "react";
import {SlSocialLinkedin} from 'react-icons/sl'
import {TiSocialFacebook} from 'react-icons/ti'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai'

function ProfileSocial() {
    return(
            
        <div className="flex flex-col sm:flex-row sm:justify-between mt-9 ">
            <div className="flex items-baseline justify-between border-2 m-5 p-5 max-w-sm md:w-1/4 rounded-md">
                <p className="text-2xl">Social</p>
                <span><a className="cursor-pointer text-[#7868E6]">Add Social</a></span>
            </div>

            <div className="Follow">
                <div className="bg-black align-center w-full md:w-96 md:mt-10 h-px "></div>
                <div className="m-auto md:mr-10">
                    <span  className="max-w-lg m-auto ml-10 sm:ml-10">Followers <a>(99)</a></span>
                    <span className="max-w-lg ml-6 sm:ml-10">Following<a>(99)</a></span>
                </div>
            </div>
        </div>
    )
}
export default ProfileSocial;