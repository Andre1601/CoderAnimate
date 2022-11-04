import React from "react";
import UploadImage from "./Upload/UploadImage";

function UploadBody() {
    return (
        <main className="px-5 sm:px-10 ">
            <h2 className="text-center mt-10 text-xl font-bold">What are you working on?</h2>
            <h3 className="text-center text-sm mt-2">Upload a picture of your coding result</h3>
            <input className="border-solid border-2 border-[#7868E6] rounded-lg py-1 px-3 w-full mt-16" placeholder="Give me a Title"/>
            <UploadImage/>
            <input className="border-solid border-2 border-[#7868E6] rounded-lg py-1 px-3 w-full mt-6" placeholder="Write something that describes your project"/>
            <input className="border-solid border-2 border-[#7868E6] rounded-lg py-1 px-3 w-full mt-6" placeholder="Add Tags..."/>
            <button className="bg-[#7868E6] px-9 py-2 my-10 text-white rounded-2xl float-right" >Continue</button>
        </main>
    )
}

export default UploadBody;