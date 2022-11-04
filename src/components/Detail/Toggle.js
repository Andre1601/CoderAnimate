import React from "react";

function Toggle() {
    return (
        <div className="grid grid-cols-3 center mt-10 bg-[#7868E6] text-white h-10 w-full rounded-lg overflow-hidden">
            <button className="hover:bg-black focus:bg-black" >HTML</button>
            <button className="hover:bg-black focus:bg-black">CSS</button>
            <button className="hover:bg-black focus:bg-black" >JS</button>
        </div>
    )
}

export default Toggle;