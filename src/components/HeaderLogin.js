import React from "react";
import {BiArrowBack} from "react-icons/bi"
import {GiHamburgerMenu} from "react-icons/gi"

function HeaderLogin() {
    return (
        <header className="grid grid-cols-[100px_1fr_100px] bg-[#7868E6] h-[8vh] justify-items-center items-center text-2xl text-white" >
            <BiArrowBack/>
            <h1>CoderAnimate</h1>   
            <GiHamburgerMenu/>
        </header>
    )
}

export default HeaderLogin;