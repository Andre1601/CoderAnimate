import React from "react";
import {RiFolderUserFill} from 'react-icons/ri'
import {GrLocationPin} from 'react-icons/gr'
import {Link} from 'react-router-dom';

const ProfileBiography = () => {
    return(
    <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="mt-5">
            <p className="text-2xl ml-5 mt-5">Biography</p>
            <Link to="/setting/edit" className="ml-5 mt-3 cursor-pointer text-[#7868E6]">Add Biography</Link>
        </div>

        <div className="ml-5 bg-slate-400 rounded-lg  p-4 mt-5 m-3">
            <div className="flex">
                <GrLocationPin  className="mx-2"/>
                <p className="text-sm">Indonesia</p>
            </div>

            <div className="flex">
                <RiFolderUserFill  className="mx-2"/>
                <p className="text-sm">Member since Oct 2022</p>
            </div>
        </div>
     </div>
    )
}

export default ProfileBiography;