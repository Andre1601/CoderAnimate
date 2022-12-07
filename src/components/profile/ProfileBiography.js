import React from "react";
import {RiFolderUserFill} from 'react-icons/ri'
import {GrLocationPin} from 'react-icons/gr'
import {Link} from 'react-router-dom';
import { showFormattedDate } from "../../utils/format-date";

const ProfileBiography = ({data}) => {
    return(
    <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="mt-5">
            <p className="text-2xl ml-5 mt-5">Biography</p>
            <p className="ml-5 mt-3">{data.bio}</p>
        </div>
     </div>
    )
}

export default ProfileBiography;