/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {CiLocationOn} from 'react-icons/ci'
import {RiFolderUserFill} from 'react-icons/ri'

function ProfileBiography() {
    return(
        <div className="flex flex-col sm:flex-row sm:justify-between ">
        <div className="mt-5">
            <p className="text-2xl ml-5 mt-5">Biography</p>
            <p className="ml-5 mt-3 cursor-pointer text-[#7868E6]"><a>Add Biography</a></p>
        </div>
        
        <div className="ml-5 bg-slate-400 rounded-lg  p-4 mt-5 m-3">
            <div className="flex">
                <span className="mx-2"><CiLocationOn/></span>
                <p className="text-sm">Indonesia</p>
            </div>
            <div className="flex">
                <span className="mx-2"><RiFolderUserFill/></span>
                <p className="text-sm">Member since Oct 2022</p>
            </div>
        </div>
     </div>
    )
}

export default ProfileBiography;