import React from "react";
import DetailUser from '../components/profilePengguna/DetailUser';
import CardItem from "./CardItem";

function UserLain(){
    return(
        <>
        <DetailUser/>
        <div className=" flex justify-center w-full my-5">
            <span className=" bg-gray-700 w-4/5 h-[2px]"></span>
        </div>
        <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 py-5 gap-y-4">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
        </>
    )

}

export default UserLain;