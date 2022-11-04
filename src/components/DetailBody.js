import React from "react";
import Theme from "./Detail/Theme";
import Toggle from "./Detail/Toggle";
import UserStatus from "./Detail/UserStatus";

function DetailBody() {
    return(
        <main className="px-5" >
            <h2 className="mt-8 text-xl" >Title is...</h2>
            <UserStatus/>
            <Toggle/>
            <Theme/>
        </main>
    )
}


export default DetailBody;