import React from "react";
import {MdImage} from "react-icons/md"

function UploadImage() {
    return (
        <div className="flex flex-col border-solid border-2 justify-center items-center border-[#7868E6] rounded-lg mt-6 h-[260px] sm:h-80 lg:h-[500px]">
            <MdImage className="text-8xl sm:text-9xl text-[#7868E6]"/>
            <h3 className="text-[10px] sm:text-base">Drag and drop an image, or Browser</h3>
            <h3 className="text-[10px] sm:text-base font-extralight">??? or higher recommended</h3>
        </div>
    )
}


export default UploadImage;