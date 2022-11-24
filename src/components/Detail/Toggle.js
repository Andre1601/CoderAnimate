import React, { useEffect } from "react";


function Toggle({onToggleClick}) {

    useEffect(() => {
        const firstChecked = document.querySelector('#html-button');
        firstChecked.setAttribute('checked', 'checked')
    }, []);

    return (
        <div className="grid grid-cols-3 mt-10  text-white h-10 w-full sm:w-[600px] sm:mx-auto rounded-lg overflow-hidden ">
            <button className="hover:bg-black" onClick={() => onToggleClick('html')} >
                <input className="hidden" type="radio" id="html-button" name="toggle" />
                <label className="flex bg-[#7868E6] w-full h-full justify-center items-center cursor-pointer" htmlFor="html-button">HTML</label>
            </button>
            <button className="hover:bg-black" onClick={() => onToggleClick('css')}>
                <input className="hidden" type="radio" id="css-button" name="toggle" />
                <label className="flex bg-[#7868E6] w-full h-full justify-center items-center cursor-pointer" htmlFor="css-button">CSS</label>
            </button>
            <button className="hover:bg-black" onClick={() => onToggleClick('js')}>
                <input className="hidden" type="radio" id="js-button" name="toggle" />
                <label className="flex bg-[#7868E6] w-full h-full justify-center items-center cursor-pointer" htmlFor="js-button">JS</label>
            </button>
        </div>
    )
}

export default Toggle;