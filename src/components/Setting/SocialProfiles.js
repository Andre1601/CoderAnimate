import React from "react";

function SocialProfiles() {
    return (
        <div className="flex flex-col my-10 sm:my-0" >
        <label htmlFor="twitter" >Twitter</label>
        <input id="twitter" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
        <label htmlFor="facebook" className="mt-5">Facebook</label>
        <input id="facebook" type="password" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
        <label htmlFor="instagram" >Instagram</label>
        <input id="instagram" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
        <label htmlFor="github" className="mt-5">GitHub</label>
        <input id="github" type="password" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
        <label htmlFor="linkedin" className="mt-5">LinkedIn</label>
        <input id="linkedin" type="password" className="border-solid border-2 border-[#A5A5A5] focus:border-[#7868E6] rounded-lg py-2 px-3 w-full mt-2" />
      </div>
    )
}

export default SocialProfiles;