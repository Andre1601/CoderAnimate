import React from "react";
import {Link, Outlet} from "react-router-dom";

function ProfileCollection() {
    return(
        <div >
            <div className="m-auto md:ml-40 mt-12">
                <span className="max-w-lg m-auto ml-10 sm:ml-20 cursor-pointer "><Link to="/profile" className="focus:outline-none focus:underline focus:underline-offset-8-black">Collection</Link> (20)</span>
                <Link to="/profile/about" className="max-w-lg ml-6 sm:ml-20 cursor-pointer  focus:outline-none focus:underline focus:underline-black">About</Link>
                <Outlet/>
            </div>
            <div className="bg-black align-center w-5/6 h-px mt-4 m-auto"></div>
        </div>
    )
}
export default ProfileCollection;