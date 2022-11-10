import React from "react";
import CodeEditor from "./Detail/CodeEditor";
import OutputDisplay from "./Detail/OutputDisplay";
import Theme from "./Detail/Theme";
import Toggle from "./Detail/Toggle";

function UploadCodeBody() {
    return (
        <main className="px-5 sm:px-10 md:px-28 lg:px-52">
            <h2 className="text-center mt-10 text-xl font-bold">Upload your source code</h2>
            <Toggle/>
            <Theme/>
            <CodeEditor/>
            <OutputDisplay/>
            <button className="bg-[#7868E6] px-9 py-2 my-10 text-white rounded-2xl float-right">Publish Now</button>
        </main>
    )
}


export default UploadCodeBody;