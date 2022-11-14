import React from "react";
import {Link} from "react-router-dom";

function ProfileCollection() {
    return(
        <div className="Colection">
            <div className="m-auto md:ml-40 mt-12">
                <span  className="max-w-lg m-auto ml-10 sm:ml-20 cursor-pointer"><Link to="/profile">Collection</Link> (20)</span>
                <span className="max-w-lg ml-6 sm:ml-20 cursor-pointer"><Link to="/profileAbout">About</Link></span>
            </div>
            <div className="bg-black align-center w-5/6 h-px mt-4 m-auto"></div>
        </div>
    )
}
export default ProfileCollection;